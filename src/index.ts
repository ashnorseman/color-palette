/**
 * App entry
 */

import './style.scss';

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
  const color: string = (<HTMLInputElement>document.getElementById('color')).value;
  const count: number = +(<HTMLInputElement>document.getElementById('count')).value;
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
