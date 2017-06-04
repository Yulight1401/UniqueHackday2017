const MONEYRATE = 0.1
class WorkFlow {
  constructor () {
    let self = this
    this.works = [
      {
        scene: 0,
        news: '羊氏新闻：今年5月以来，受高温的持续影响，南极冰川融化加快，Z国东部平原正遭受空前危机，海平面高于下海.',
        poster: '尊敬的国王：',
        text: '受到全球气候变暖影响，冰川消融，海水正威胁着你的国土，发挥你的智慧，领导你的国民一起阻挡海水侵蚀你的土地吧。',
        handletrue: function () {
        },
        handlefalse: function () {
          self.index = -1
        }
      },
      {
        scene: 0,
        news: '',
        poster: '经济：',
        text: '国家富裕指数，经济收入可以投入科研和社会福利之中。',
        handletrue: function () {
        },
        handlefalse: function () {
          self.index = 0
        }
      },
      {
        scene: 0,
        news: '',
        poster: '科研：',
        text: '研究更先进的技术，可以抵御温室效应。',
        handletrue: function () {
        },
        handlefalse: function () {
          self.index = 1
        }
      },
      {
        scene: 0,
        news: '',
        poster: '民心：',
        text: '人民对于执政者的满意度。指数过低，会引发社会动乱。',
        handletrue: function () {
        },
        handlefalse: function () {
          self.index = 2
        }
      },
      {
        scene: 0,
        poster: '陕昔地矿局',
        news: '受到全球气候变暖影响，冰川消融，海水正威胁着国土',
        text: '在Q岭山脉深处新发现一处铁、金共生矿床，金矿资源储量达中型规模，开采成本中等，经济价值高,是否开采呢？',
        handletrue: function () {
          let money = this.state.money + 100 * MONEYRATE
          let sealevel = this.state.sealevel + 0.5
          this.setState({
            money: money,
            sealevel: sealevel
          })
        },
        handlefalse: function () {
          let people = this.state.people + 5
          this.setState({
            people: people
          })
        }
      },
      {
        scene: 1,
        poster: '国务大臣',
        news: '鹿头社：受到全球气候变暖的影响，东伯利亚平原愈加适合耕种。',
        text: '希望开放住宅政策，放宽宅基地审批，以改善民众住房',
        handletrue: function () {
          let money = this.state.money + 100 * MONEYRATE
          let sealevel = this.state.sealevel + 0.5
          this.setState({
            money: money,
            sealevel: sealevel
          })
        },
        handlefalse: function () {
          let people = this.state.people + 5
          this.setState({
            people: people
          })
        }
      },
      {
        scene: 0,
        poster: '科技部:',
        news: '碳捕捉技术',
        text: '科技部请求开发碳捕捉技术，捕获空气中二氧化碳，压缩导入地下储存，有效降低温室气体',
        handletrue: function () {
          let money = this.state.money - 20 * MONEYRATE
          let sealevel = this.state.sealevel + 0.1
          let technology = this.state.technology + 30
          this.setState({
            money: money,
            sealevel: sealevel,
            technology: technology
          })
        },
        handlefalse: function () {
        }
      },
      {
        scene: 1,
        poster: '外事大臣',
        news: '',
        text: '希望在国内个生态区开发豪华别墅区，以促进旅游业发展。Z国梦，就是拥有一个大房子，还有一个漂亮老婆，不过在这之前还是先有一个大房子吧,是否通过？',
        handletrue: function () {
          let money = this.state.money + 100 * MONEYRATE
          let people = this.state.people - 20 < 0 ? (0) : (this.state.people - 20)
          let sealevel = this.state.sealevel + 0.3
          this.setState({
            money: money,
            sealevel: sealevel,
            people: people
          })
        },
        handlefalse: function () {
          let people = this.state.people + 10
          this.setState({
            people: people
          })
        }
      },
      {
        scene: 2,
        poster: '科技部:',
        news: '国内新能源势头强劲',
        text: '科技部请求探索页岩气等新兴能源，以代替部分化石能源',
        handletrue: function () {
          let money = this.state.money - 20 * MONEYRATE
          let sealevel = this.state.sealevel + 0.1
          let technology = this.state.technology + 20
          this.setState({
            money: money,
            sealevel: sealevel,
            technology: technology
          })
        },
        handlefalse: function () {
        }
      },
      {
        scene: 1,
        poster: '交通大臣提案:',
        news: '',
        text: '政府增加对私家车跨省长距离行驶的过路费',
        handletrue: function () {
          let money = this.state.money + 50 * MONEYRATE
          let people = this.state.people - 20 < 0 ? (0) : (this.state.people - 20)
          let sealevel = this.state.sealevel - 0.5
          this.setState({
            money: money,
            people: people,
            sealevel: sealevel
          })
        },
        handlefalse: function () {
        }
      },
      {
        scene: 2,
        poster: '能源大臣提案:',
        news: '',
        text: '对空调厂家，增加营业税，间接调控空调购买量',
        handletrue: function () {
          let money = this.state.money + 20 * MONEYRATE
          let sealevel = this.state.sealevel - 0.2
          let people = this.state.people - 20 < 0 ? (0) : (this.state.people - 20)
          this.setState({
            money: money,
            sealevel: sealevel,
            people: people
          })
        },
        handlefalse: function () {
        }
      },
      {
        scene: 2,
        poster: '能源大臣:',
        news: '',
        text: '在海上建设石油钻井平台，缓解国内能源压力',
        handletrue: function () {
          let money = this.state.money + 20 * MONEYRATE
          let sealevel = this.state.sealevel + 0.4
          this.setState({
            money: money,
            sealevel: sealevel
          })
        },
        handlefalse: function () {
          let people = this.state.people - 20 < 0 ? (0) : (this.state.people - 20)
          this.setState({
            people: people
          })
        }
      },
      {
        scene: 1,
        poster: '科技部:',
        news: '生物碳技术',
        text: '科技部请求开发生物碳技术，利用生物质能热分解成为碳化物，缓解能源压力',
        handletrue: function () {
          let money = this.state.money - 20 * MONEYRATE
          let sealevel = this.state.sealevel + 0.1
          let technology = this.state.technology + 30
          this.setState({
            money: money,
            sealevel: sealevel,
            technology: technology
          })
        },
        handlefalse: function () {
        }
      },
      {
        scene: 2,
        news: '',
        poster: '环境大臣提案:',
        text: '关停排放检测不合格的工厂',
        handletrue: function () {
          let money = this.state.money - 150 * MONEYRATE
          let people = this.state.people + 10
          let sealevel = this.state.sealevel - 0.6
          this.setState({
            people: people,
            money: money,
            sealevel: sealevel
          })
        },
        handlefalse: function () {
          let people = this.state.people - 10 < 0 ? (0) : (this.state.people - 20)
          this.setState({
            people: people
          })
        }
      }
    ]
    this.index = -1
  }
  loadNextWork () {
    this.index += 1
    if (this.index > this.works.length) {
      return null
    }
    return this.works[this.index]
  }
}

export default WorkFlow
