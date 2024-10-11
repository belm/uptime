window.Config = {

  // 显示标题
  SiteName: 'Uptime-status',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only
  ApiKeys: [
    'ur2702539-fca437ff658703abd26ee825',
    //'m797638073-924f5efed86446cce1c95ae1', // 周润发的博客 API key
    //'m797713213-1c83620d56db599960ad0244', // 周润发的公益订阅 API key
    //'m797713331-835664f191b589688f122e00', // 周润发的公益订阅器 API key
  ],

  // 日志天数
  CountDays: 60,

  // 是否显示检测站点的链接
  ShowLink: true,

  // 导航栏菜单
  Navi: [
    {
      text: '主页',
      url: 'https://uptime.ttsdk.com/'
    },    
    {
      text: 'GitHub',
      url: 'https://github.com/belm/uptime/'
    }
  ],
};
