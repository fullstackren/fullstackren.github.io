# 挣值管理

##

| 简称 | 说明 | 详细说明 |
|:-|:-|:-|
| PV | PLaned Value 计划值 | 在即定时间时间节点应该完成某一比例工作量所应该花费的经费 |
| EV | Earn Value 挣值 | 在即定时间段内实际完工工作的预算成本 |
| AC | Actual Cost 实际成本 | 在即定时间段内实比分完成工作发生的实际总成本。
| BAC |  | |
| BDAC |  | |

## 推算

| 简称 | 说明 | 公式 | 分析 |
|:-|:-|:-|:-|
| CV | Cost 成本偏差 | EV - AC | 和 0 比较，> 0 成本节约  |
| CPI | Cost 成本绩效指数 | EV / AC | 和 1 比较 |
| SV | Schedule 进度偏差 | EV - PV | 和 0 比较，> 0 进度超前 |
| SPI | Schedule Index 进度绩效指数 | EV / PV | >1，进度超前 |
| EAC | 完工估算 | BAC/CPI等4种方法 | |
| ETC | 完工尚需估算 | EAC - AC | |
| VAC | 完工成本偏差 | BAC - EAC | > 0 |
| EDAC | 完工工期估算 | BDAC / SPI | BDAC |
| TCPI | 完工尚需绩效指数 | (BAC - EV)/(BAC - AC) | XX计划里找 |

ES Earn Schedule 挣值进度，
TV 浪费时间
