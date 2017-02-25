/**
 * App entry
 */

import './style.scss';

import * as Clipboard from 'clipboard';
import * as echarts from './lib/echarts';

import { genColorRing } from './utils/gen-color-ring';

const myChart = echarts.init(document.getElementById('ring-chart'));

const dataOption = {
  value: 1,
  label: {
    normal: {
      show: false
    },
    emphasis: {
      show: true
    }
  },
  labelLine: {
    normal: {
      show: false
    },
    emphasis: {
      show: true
    }
  },
  itemStyle: {
    normal: {
      borderColor: '#fff',
      borderWidth: 2
    }
  }
};

window['generate'] = function (event?: Event) {
  const colorInput: HTMLInputElement = <HTMLInputElement>document.getElementById('color');
  const color: string = colorInput.value;
  const countInput: HTMLInputElement = <HTMLInputElement>document.getElementById('count');
  let count: number = +countInput.value;

  const MAX_COUNT = 50;

  if (isNaN(count) || count <= 0 || count > MAX_COUNT) {
    count = MAX_COUNT;
    countInput.value = '' + MAX_COUNT;
  }

  const colorRing: string[] = genColorRing(color, count);

  const data = [];

  for (let i = 0; i < colorRing.length; i += 1) {
    data.push(Object.assign({}, dataOption, {
      name: colorRing[i]
    }));
  }

  const option = {
    color: colorRing,
    series : [{
      type: 'pie',
      radius: [0, '95%'],
      data
    }]
  };

  myChart.setOption(option);

  const result = <HTMLInputElement>document.getElementById('result');

  result.value = colorRing.join(', ');

  if (event) {
    event.preventDefault();
  }
};

window['generate']();

new Clipboard('#copy');
