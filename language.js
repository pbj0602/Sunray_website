// 语言管理系统
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem('language') || 'zh';
    this.translations = {
      zh: {
        // 导航栏
        home: '主页',
        products: '产品和解决方案',
        selProducts: 'SEL产品',
        hitachiProducts: '日立能源产品',
        switchgearComponents: '开关柜组件',
        solutions: '解决方案',
        contactUs: '联系我们',
        aboutUs: '关于我们',
        joinUs: '加入我们',
        
        // 首页内容
        heroTitle: '赋能电力安全<br class="sm:hidden">智启能源未来',
        heroSubtitle: '我们致力于打造更安全、更智能的电力系统。',
        learnMore: '了解更多',
        productsAndSolutions: '产品和解决方案',
        
        // 产品部分
        microcomputerProtection: '微机保护及自动化产品',
        selAuthorizedDealer: 'SEL官方授权代理',
        selProductSeries: 'SEL产品系列',
        
        powerControlCabinet: '电力控制柜组件',
        relaysSwitches: '继电器、测试开关、转换开关等',
        usEuStandards: '美标、欧标产品系列',
        
        hitachiEnergyProducts: '日立能源产品',
        cableAccessories: '电缆附件、电容器、滤波器、变压器等',
        hitachiProductSeries: '日立能源产品系列',
        
        technicalServices: '技术服务',
        servicesDescription: '组屏、调试、集成、检验、故障分析、模拟仿真',
        learnDetails: '了解详情',
        
        // 页脚
        copyright: '© 2025 成都蜀锐科技有限公司 保留所有权利',
        
        // 首页SEO Meta
        metaTitle: '企业官网 - 成都蜀锐科技有限公司 | SEL保护授权代理',
        metaDescription: '成都蜀锐科技有限公司是SEL官方授权代理，专业提供微机保护及自动化产品、电力控制柜组件、日立能源产品等电力系统解决方案。',
        metaKeywords: 'SEL保护,微机保护,电力自动化,电力控制柜,日立能源,电缆附件,成都蜀锐,电力系统解决方案',

        // 关于我们页面
        aboutTitle: '关于我们 - 成都蜀锐科技有限公司',
        aboutDescription: '成都蜀锐科技有限公司成立于2007年，专注于电网自动化、变配电站自动化、智能楼宇及企业能源管理领域，是SEL和日立能源的授权代理。',
        aboutKeywords: '成都蜀锐,公司简介,电网自动化,变配电站自动化,智能楼宇,企业能源管理,SEL授权代理,日立能源',
        companyProfile: '公司简介',
        partners: '合作伙伴',
        companyIntro1: '成都蜀锐科技有限公司成立于2007年，位于成都市高新区。公司专注于电网自动化、变配电站自动化、智能楼宇及企业能源管理领域，业务涵盖高低压电气设备、综合微机保护系统、变配电自动化系统、电厂自动化设备等多个专业领域。',
        companyIntro2: '公司具备深化设计、现场施工、设备调试、软件组态、系统集成等全流程综合能力，能够承接各电压等级的电气自动化、微机综合保护及楼宇智能化等项目工程。',
        companyIntro3: '公司产品与服务广泛应用于电力、烟草、石化、电子制造、冶金等多个行业，并出口至海外市场。',

        // 联系我们页面
        contactTitle: '联系我们 - 成都蜀锐科技有限公司',
        contactDescription: '联系成都蜀锐科技有限公司，专业提供电力系统保护与自动化的全方位咨询与技术服务，电话：+86 28 8529 3296，邮箱：info@e-sunray.com。',
        contactKeywords: '联系我们,成都蜀锐,电力系统保护,电力自动化,技术服务,咨询',
        email: '电子邮箱',
        phone: '联系电话',
        contactBanner: '我们专业提供电力系统保护与自动化的全方位咨询与技术服务，覆盖项目规划、设计、检测、实施及运维各阶段，全面保障电力系统更安全更可靠、更经济地运行',

        // 加入我们页面
        joinTitle: '加入我们 - 成都蜀锐科技有限公司',
        joinDescription: '成都蜀锐科技有限公司诚邀优秀人才加入，我们提供电力自动化、微机保护、系统集成等领域的职业发展机会',
        joinKeywords: '加入我们,招聘,成都蜀锐,电力自动化,微机保护,系统集成,职业发展',
        joinSlogan: '与优秀的人一起，做专业的事',
        recruiting: '招贤纳士',
        fullTime: '全职',
        internship: '实习',
        projectManager: '项目经理',
        technicalDept: '技术部',
        salesDept: '销售部',
        chengdu: '成都',
        viewDetails: '查看详情',
        // projectManagerDesc: '自动化工程项目、配电项目、变电站自动化工程项目的整体规划设计、组织实施、竣工验收，以及项目实施过程的组织协调和过程监控，包括工程项目的质量控制、进度控制和成本控制。',
        // salesEngineerDesc: '销售SEL变电站综合自动化系统及微机保护产品；负责所辖地区的市场开拓和维护；负责项目投标及用户联系沟通。',
        // applicationEngineerDesc: '根据项目主管安排，及时做好继电保护、监控系统等产品的生产调试、售后服务及客户技术培训工作；反馈问题，建立良好的客户关系，收集并传递客户对公司产品的反馈信息；按要求及时完成归档工作。',

        // SEL产品页面
        selTitle: 'SEL产品 - 成都蜀锐科技有限公司 | SEL授权代理',
        selDescription: '成都蜀锐科技有限公司是SEL官方授权代理，专业提供SEL微机保护设备，包括进线保护、馈线保护、母联保护等电力自动化解决方案。',
        selKeywords: 'SEL产品,SEL保护,SEL微机保护,SEL-700BT,SEL-351,SEL-451,SEL-501,SEL-551,SEL-751,成都蜀锐,SEL授权代理',
        selBanner: '我们是SEL官方授权代理，提供优质可靠的微机保护和自动化解决方案',
        
        // SEL产品类别标题
        arcFlashProtectionTitle: '弧光保护',
        motorProtectionTitle: '电机保护', 
        generatorProtectionTitle: '发电机保护',
        transformerProtectionTitle: '变压器保护',
        lineProtectionTitle: '线路保护',
        busProtectionTitle: '母线保护',
        monitoringIOTitle: '监控和IO产品',
        measurementMetersTitle: '测量表计',
        automationControllersTitle: '自动化控制器',
        industrialComputersTitle: '工业电脑',
        securityGatewaysTitle: '安全网关和串口服务器',
        switchesTitle: '交换机',
        multiplexersTitle: '多路复用器',
        clockProductsTitle: '时钟产品',
        softwareProductsTitle: '软件产品',
        incomingFeederProtection: '进线、馈线、母联保护',
        arcFlashProtection: '弧光保护',
        motorProtection: '电机保护',
        generatorProtection: '发电机保护',
        transformerProtection: '变压器保护',
        lineProtection: '线路保护',
        busProtection: '母线保护',
        monitoringIO: '监控和IO产品',
        measurementMeters: '测量表计',
        automationControllers: '自动化控制器',
        industrialComputers: '工业电脑',
        securityGateways: '安全网关和串口服务器',
        switches: '交换机',
        multiplexers: '多路复用器',
        clockProducts: '时钟产品',
        softwareProducts: '软件产品',
        
        // // SEL产品描述
        // busTieProtection: '母联保护',
        // feederProtection: '馈线保护',
        // incomingFeederBusControl: '进线、母联、馈线保护、间隔控制单元',
        // doubleOvercurrentProtection: '双过流保护',
        // overcurrentProtection: '过流保护',
        // rotorGroundProtection: '转子接地保护',
        // statorGroundProtection: '定子接地保护',
        // transformerCurrentDifferential: '变压器电流差动保护',
        // transformerMonitor: '变压器监测装置',
        // lineDifferentialProtection: '线路差动保护',
        // lineProtectionSystem: '线路保护系统（光纤差动+距离保护等）',
        // lineDistanceProtection: '线路保护（距离保护等）',
        // busProtectionRelay: '母线保护',
        // highImpedanceDifferential: '高阻抗差动保护',
        // programmableAutomationController: '可编程自动化控制器',
        // digitalProgrammableController: '数字量可编程自动化控制器',
        // remoteTerminalModule: '远程8DI/8DO终端模块',
        // serialOpticalConverter: '串口-光口转换器',
        // powerQualityMeter: '电能质量和计费表',
        // realtimeAutomationController: '实时自动化控制器',
        // bcuRtuPmuController: '可用于BCU、RTU、PMU等',
        // industrialComputer: '工业电脑',
        // serialServer: '串口服务器',
        // securityGateway: '安全网关',
        // rackMountSwitch24: '24口机架式安装交换机',
        // switch5Port: '5口交换机',
        // sdnRackSwitch24: '24口机架式安装SDN交换机',
        // sdnRailSwitch12: '12口导轨安装SDN交换机',
        // multiplexer: '多路复用器',
        // satelliteSyncClock: '卫星同步网络时钟',
        // satelliteTimeClock: '卫星同步时钟',
        // irigDistributionModule: 'IRIG-B分配模块',
        // irigFiberTransceiver: '高精度IRIG-B光纤收发器',
        // acselQuickset: 'AcSELerator QuickSet软件',
        // acselArchitect: 'AcSELerator Architect软件',
        // acselRtac: 'AcSELerator RTAC软件',
        // acselDiagram: 'AcSELerator Diagram Builder软件',
        // selGridConfig: 'SEL Grid Configurator',
        // sdnTrafficControl: '软件定义网络流量控制软件',
        // sdnApplicationSuite: '软件定义网络应用套件',
        // acselTeam: 'AcSELerator TEAM软件',
        // synchrowaveCenter: 'SynchroWAVe同步向量数据集中软件',
        // synchrowaveAnalysis: 'SynchroWAVe录波分析软件',
        // synchrowaveOperations: 'SynchroWAVe同步向量操作软件',
        // synchrowaveMonitor: 'SynchroWAVe同步向量监视软件',
        // synchrowaveReports: 'SynchroWAVe报告软件',
        
        // // 所有产品描述
        // motorProtectionDesc: '电机保护',
        // generatorProtectionDesc: '发电机保护',
        // transformerProtectionDesc: '变压器保护',
        // lineProtectionDesc: '线路保护',
        // lineDifferentialProtectionDesc: '线路差动保护',
        // lineDistanceProtectionDesc: '线路保护（距离保护等）',
        // busProtectionDesc: '母线保护',
        // feederProtectionDesc: '馈线保护',
        // industrialComputerDesc: '工业电脑',
        // serialServerDesc: '串口服务器',
        // securityGatewayDesc: '安全网关',
        // switch24Port: '24口机架式安装交换机',
        // switch5Port: '5口交换机',
        // sdnSwitch24Port: '24口机架式安装SDN交换机',
        // sdnSwitch12Port: '12口导轨安装SDN交换机',
        // multiplexerDesc: '多路复用器',
        // satelliteSyncNetworkClock: '卫星同步网络时钟',
        // satelliteSyncClock: '卫星同步时钟',
        // irigDistribution: 'IRIG-B分配模块',
        // irigFiberTransceiver: '高精度IRIG-B光纤收发器',
        // sdnTrafficControlSoftware: '软件定义网络流量控制软件',
        // sdnApplicationSuite: '软件定义网络应用套件',
        // synchrowaveCenterDesc: 'SynchroWAVe同步向量数据集中软件',
        // synchrowaveAnalysisDesc: 'SynchroWAVe录波分析软件',
        // synchrowaveOperationsDesc: 'SynchroWAVe同步向量操作软件',
        // synchrowaveMonitorDesc: 'SynchroWAVe同步向量监视软件',
        // synchrowaveReportsDesc: 'SynchroWAVe报告软件',

        // 日立能源产品页面
        hitachiTitle: '日立能源产品 - 成都蜀锐科技有限公司 | Hitachi授权代理',
        hitachiDescription: '成都蜀锐科技有限公司是日立能源官方授权代理，专业提供1-245kV电缆附件、电容器、滤波器、变压器等高质量电力设备。',
        hitachiKeywords: '日立能源,Hitachi Energy,电缆附件,电容器,滤波器,变压器,成都蜀锐',
        cableAccessories245kV: '1-245kV电缆附件',
        capacitorsFilters: '电容器和滤波器',
        transformers: '变压器',
        
        // 日立产品横幅和描述
        hitachiBanner: '我们提供高品质的日立能源产品及解决方案',
        
        // 开关柜产品横幅和描述
        switchgearBanner: '我们提供符合美标和欧标的高质量控制柜组件',
        
        // 解决方案产品横幅和描述  
        solutionsBanner: '我们提供全方位的电力系统自动化解决方案，从组装到验收的一站式服务',
        
        // 日立电缆附件产品
        // shieldedSeparableConnector: '屏蔽式可分离连接器',
        // withWithoutArrester: '带/不带避雷器',
        // coldShrinkCableAccessories: '冷缩电缆附件',
        // terminalsJoints: '终端、接头',
        // conicalPlugInGisTerminal: '内锥插拔式 GIS 终端',
        // type2And3: '2#和3#',
        // prefabricatedJoint: '预制接头',
        // oneFortyFiveKv: '145 kV',
        
        // // 日立电容器产品
        // acSinglePhaseCapacitor: 'AC交流单相电容器',
        // highQualitySinglePhaseCompensation: '高品质单相电容补偿装置',
        // dryDcLinkCapacitor: '干DC链路电容器',
        // highPerformanceDcLink: '高性能直流链路电容',
        // acSplitPhaseCapacitor: 'AC交流分相电容器',
        // splitPhaseCompensationSolution: '分相补偿解决方案',
        // dcFilterCapacitor: '直流滤波电容器',
        // efficientDcFilterDevice: '高效直流滤波装置',
        // surgeCapacitorAc: '浪涌电容器(AC)',
        // reliableSurgeProtection: '可靠浪涌保护装置',
        // threePhaseCapacitorAc: '三相电容器(AC)',
        // threePhaseCompensationSystem: '三相电力补偿系统',
        // metalEnclosedCapacitorAbbacus: '金属封闭式电容器组 ABBACUS',
        // highReliabilityEnclosedCompensation: '高可靠性封闭式补偿装置',
        // rackMountedShuntCapacitorQbank: '组架式并联电容器组 QBank',
        // modularShuntCompensationSystem: '模块化并联补偿系统',
        // metalEnclosedCapacitorEmpac: 'Metal enclosed capacitor banks EMPAC',
        // enclosedCapacitorBankSystem: '封闭式电容器组系统',
        // metalEnclosedCapacitorSikap: 'Metal enclosed capacitor banks SIKAP',
        // intelligentEnclosedCompensationSystem: '智能封闭式补偿系统',

        // 开关柜组件页面
        switchgearTitle: '开关柜组件产品 - 成都蜀锐科技有限公司',
        switchgearDescription: '成都蜀锐科技有限公司专业提供开关柜组件产品，包括辅助继电器、转换开关、测试开关等高质量电力控制设备。',
        switchgearKeywords: '开关柜组件,辅助继电器,转换开关,测试开关,电力控制,成都蜀锐',
        auxiliaryRelays: '辅助继电器',
        transferSwitches: '转换开关',
        testSwitches: '测试开关',

        // 解决方案页面
        solutionsTitle: '解决方案 - 成都蜀锐科技有限公司',
        solutionsDescription: '成都蜀锐科技有限公司提供全方位的电力系统解决方案，包括组屏、调试、集成、检验、故障分析、模拟仿真等专业技术服务。',
        solutionsKeywords: '解决方案,组屏,调试,集成,检验,故障分析,模拟仿真,电力系统,技术服务',
        panelAssembly: '组屏',
        panelAssemblyDesc: '专业的屏柜组装服务，确保每个组件的精确安装和可靠连接',
        commissioning: '调试',
        commissioningDesc: '全面的系统调试服务，确保设备运行稳定可靠',
        integration: '集成',
        integrationDesc: '智能系统集成解决方案，实现设备互联互通和智能化管理',
        faultAnalysis: '故障分析',
        faultAnalysisDesc: '专业的故障诊断和分析服务，快速定位并解决系统问题',
        simulation: '模拟仿真',
        simulationDesc: '先进的系统模拟和仿真技术，优化系统性能和可靠性',
        inspection: '检验',
        inspectionDesc: '严格的质量检验流程，确保设备符合行业标准和规范要求',

        // 职位详情页面
        returnToJobList: '返回职位列表',
        jobDescription: '职位描述',
        jobRequirements: '岗位要求',
        qualifications: '任职资格',
        sendResumeTo: '发送简历至',
        salesEngineer: '电气、电仪销售工程师',
        applicationEngineer: '电气、电仪应用工程师',
        internApplicationEngineer: '实习-电气、电仪应用工程师',
        experienceRequired: '年以上',
        applyByEmail: '发送简历至 info@e-sunray.com',
        freshGraduateStudent: '应届毕业生/在校生',
        
        // // 项目经理职位详情
        // projectManagerJobTitle: '项目经理',
        // projectManagerJobDesc: '自动化工程项目、配电项目、变电站自动化工程项目的整体规划设计、组织实施、竣工验收，以及项目实施过程的组织协调和过程监控，包括工程项目的质量控制、进度控制和成本控制',
        // projectManagerReq1: '年龄 25-40 岁之间',
        // projectManagerReq2: '本科以上学历，电气自动化等相关专业或有丰富的电气自动化工程调试经验及管理经验',
        // projectManagerReq3: '3 年以上工作经验',
        // projectManagerReq4: '熟练使用 OFFICE、AutoCAD 等软件',
        // projectManagerQual1: '工作积极主动，敬业，外向型性格，富有激情，具有良好的沟通能力',
        // projectManagerQual2: '有变电站继电保护和综合自动化系统设计调试经验',
        // projectManagerQual3: '能适应短期出差工作',
        // projectManagerQual4: '公司提供产品知识培训和专业技术支持',
        // projectManagerQual5: '具有团队合作精神',
        
        // // 销售工程师职位详情
        // salesEngineerJobTitle: '电气、电仪销售工程师',
        // salesEngineerJobDesc: '销售SEL变电站综合自动化系统及微机保护产品；负责所辖地区的市场开拓和维护；负责项目投标及用户联系沟通。',
        // salesEngineerReq1: '年龄 25-40 岁之间',
        // salesEngineerReq2: '本科以上学历，电气自动化等相关专业',
        // salesEngineerReq3: '2 年以上工作经验',
        // salesEngineerReq4: '熟练使用 OFFICE 等软件',
        // salesEngineerQual1: '工作积极主动，敬业，外向型性格，富有激情，具有良好的沟通能力',
        // salesEngineerQual2: '有销售经验或电力行业经验',
        // salesEngineerQual3: '能适应出差工作',
        // salesEngineerQual4: '公司提供产品知识培训和专业技术支持',
        // salesEngineerQual5: '具有团队合作精神',
        
        // // 应用工程师职位详情
        // applicationEngineerJobTitle: '电气、电仪应用工程师',
        // applicationEngineerJobDesc: '根据项目主管安排，及时做好继电保护、监控系统等产品的生产调试、售后服务及客户技术培训工作；反馈问题，建立良好的客户关系，收集并传递客户对公司产品的反馈信息；按要求及时完成归档工作。',
        // applicationEngineerReq1: '年龄 25-35 岁之间',
        // applicationEngineerReq2: '本科以上学历，电气自动化等相关专业',
        // applicationEngineerReq3: '2 年以上工作经验',
        // applicationEngineerReq4: '熟练使用 OFFICE、AutoCAD 等软件',
        // applicationEngineerQual1: '工作积极主动，敬业，具有良好的沟通能力',
        // applicationEngineerQual2: '有继电保护或电力自动化相关工作经验',
        // applicationEngineerQual3: '能适应出差工作',
        // applicationEngineerQual4: '公司提供产品知识培训和专业技术支持',
        // applicationEngineerQual5: '具有团队合作精神',
        
        // // 实习应用工程师职位详情
        // internApplicationEngineerJobTitle: '实习-电气、电仪应用工程师',
        // internApplicationEngineerJobDesc: '协助工程师进行继电保护、监控系统等产品的生产调试、技术支持等工作；学习相关技术知识，参与项目实施；协助完成相关技术文档整理工作。',
        // internApplicationEngineerReq1: '在校学生或应届毕业生',
        // internApplicationEngineerReq2: '电气自动化等相关专业',
        // internApplicationEngineerReq3: '对电力系统有一定了解',
        // internApplicationEngineerReq4: '熟练使用 OFFICE 等软件',
        // internApplicationEngineerQual1: '学习能力强，积极主动',
        // internApplicationEngineerQual2: '具有良好的沟通能力',
        // internApplicationEngineerQual3: '能适应出差工作',
        // internApplicationEngineerQual4: '公司提供完善的培训体系',
        // internApplicationEngineerQual5: '具有团队合作精神'
      },
      en: {
        // 导航栏
        home: 'Home',
        products: 'Products & Solutions',
        selProducts: 'SEL Products',
        hitachiProducts: 'Hitachi Energy Products',
        switchgearComponents: 'Power Control Panel Components',
        solutions: 'Solutions',
        contactUs: 'Contact Us',
        aboutUs: 'About Us',
        joinUs: 'Join Us',
        
        // 首页内容
        heroTitle: 'Making Electric Power Safer and Smarter',
        heroSubtitle: ' ',
        learnMore: 'Learn More',
        productsAndSolutions: 'Products and Solutions',
        
        // 产品部分
        microcomputerProtection: 'Digital Protection Relays & Automation Products',
        selAuthorizedDealer: 'SEL Authorized Distributor',
        selProductSeries: 'SEL Product',
        
        powerControlCabinet: 'Power Control Panel Components',
        relaysSwitches: 'Relays, test switches, rotary switches, etc.',
        usEuStandards: 'UL & CE Standard Product Series',
        
        hitachiEnergyProducts: 'Hitachi Energy Products',
        cableAccessories: 'Cable accessories, capacitors, filters, transformers, etc.',
        hitachiProductSeries: 'Hitachi Energy Product Series',
        
        technicalServices: 'Technical Services',
        servicesDescription: 'Panel assembly, commissioning, system integration,<br>inspection, fault analysis, simulation',
        learnDetails: 'Learn More',
        
        // 页脚
        copyright: '© 2025 Chengdu Sunray Technology Co., Ltd. All rights reserved',
        
        // 首页SEO Meta
        metaTitle: 'Corporate Website - Chengdu Sunray Technology Co., Ltd. | SEL Protection Authorized Dealer',
        metaDescription: 'Chengdu Sunray Technology Co., Ltd. is an SEL authorized dealer, specializing in microcomputer protection and automation products, power control cabinet components, Hitachi Energy products and other power system solutions.',
        metaKeywords: 'SEL protection,microcomputer protection,power automation,power control cabinet,Hitachi Energy,cable accessories,Chengdu Sunray,power system solutions',

        // 关于我们页面
        aboutTitle: 'About Us - Chengdu Sunray Technology Co., Ltd.',
        aboutDescription: 'Founded in 2007, Chengdu Sunray Technology Co., Ltd. specializes in power grid automation, substation automation, intelligent buildings and enterprise energy management. We are the authorized dealer for SEL and Hitachi Energy.',
        aboutKeywords: 'Chengdu Sunray,company profile,power grid automation,substation automation,smart buildings,enterprise energy management,SEL authorized dealer,Hitachi Energy',
        companyProfile: 'Company Profile',
        partners: 'Partners',
        companyIntro1: 'Chengdu Sunray Technology Co., Ltd., founded in 2007 in Chengdu High-tech Zone, specializes in power grid and substation automation, smart buildings, and enterprise energy management, covering high- and low-voltage equipment, integrated protection systems, and automation solutions.',
        companyIntro2: 'The company offers end-to-end capabilities, including design, installation, commissioning, software configuration, and system integration, handling electrical automation and smart building projects across all voltage levels.',
        companyIntro3: 'Its products and services serve the power, tobacco, petrochemical, electronics, and metallurgical industries and are also exported internationally.',

        // 联系我们页面
        contactTitle: 'Contact Us - Chengdu Sunray Technology Co., Ltd.',
        contactDescription: 'Contact Chengdu Sunray Technology Co., Ltd. for comprehensive consulting and technical services in power system protection and automation. Phone: +86 28 8529 3296, Email: info@e-sunray.com.',
        contactKeywords: 'contact us,Chengdu Sunray,power system protection,power automation,technical services,consulting',
        email: 'Email',
        phone: 'Phone',
        contactBanner: 'We provide consulting and technical services for power system protection and automation—from planning and design to implementation and maintenance—making electric power safer and smarter.',

        // 加入我们页面
        joinTitle: 'Join Us - Chengdu Sunray Technology Co., Ltd.',
        joinDescription: 'Chengdu Sunray Technology Co., Ltd. sincerely invites excellent talents to join us. We provide career development opportunities in power automation, microcomputer protection, system integration and other fields.',
        joinKeywords: 'join us,recruitment,Chengdu Sunray,power automation,microcomputer protection,system integration,career development',
        joinSlogan: 'Work with excellent people, do professional things',
        recruiting: 'Talent Recruitment',
        fullTime: 'Full-time',
        internship: 'Internship',
        //projectManager: 'Project Manager',
        technicalDept: 'Technical Department',
        salesDept: 'Sales Department',
        chengdu: 'Chengdu',
        viewDetails: 'View Details',
        //projectManagerDesc: 'Overall planning and design, organization and implementation, completion and acceptance of automation engineering projects, power distribution projects, and substation automation engineering projects, as well as organization, coordination and process monitoring during project implementation, including quality control, schedule control and cost control of engineering projects.',
        //salesEngineerDesc: 'Sales of SEL substation integrated automation systems and microcomputer protection products; responsible for market development and maintenance in assigned areas; responsible for project bidding and user communication.',
        //applicationEngineerDesc: 'According to the arrangement of project supervisors, timely complete production debugging, after-sales service and customer technical training for relay protection, monitoring systems and other products; provide feedback on issues, establish good customer relationships, collect and transmit customer feedback on company products; complete filing work on time as required.',

        // SEL产品页面
        selTitle: 'SEL Products - Chengdu Sunray Technology Co., Ltd. | SEL Authorized Dealer',
        selDescription: 'Chengdu Sunray Technology Co., Ltd. is an SEL authorized dealer, professionally providing SEL microcomputer protection equipment including incoming protection, feeder protection, bus-tie protection and other power automation solutions.',
        selKeywords: 'SEL products,SEL protection,SEL microcomputer protection,SEL-700BT,SEL-351,SEL-451,SEL-501,SEL-551,SEL-751,Chengdu Sunray,SEL authorized dealer',
        selBanner: 'We are SEL official authorized distributor, providing high-quality and reliable digital protection relays and automation solutions',
                
        // SEL产品类别标题
        arcFlashProtectionTitle: 'Arc Flash Protection',
        motorProtectionTitle: 'Motor Protection', 
        generatorProtectionTitle: 'Generator Protection',
        transformerProtectionTitle: 'Transformer Protection',
        lineProtectionTitle: 'Line Protection',
        busProtectionTitle: 'Bus Protection',
        monitoringIOTitle: 'Monitoring and I/O Products',
        measurementMetersTitle: 'Measurement Meters',
        automationControllersTitle: 'Automation Controllers',
        industrialComputersTitle: 'Industrial Computers',
        securityGatewaysTitle: 'Security Gateways and Serial Servers',
        switchesTitle: 'Switches',
        multiplexersTitle: 'Multiplexers',
        clockProductsTitle: 'Clock Products',
        softwareProductsTitle: 'Software Products',
        incomingFeederProtection: 'Incomer, Feeder, Bus-tie Protection Relay',
        arcFlashProtection: 'Arc Flash Protection',
        motorProtection: 'Motor Protection',
        generatorProtection: 'Generator Protection',
        transformerProtection: 'Transformer Protection',
        lineProtection: 'Line Protection',
        busProtection: 'Bus Protection',
        monitoringIO: 'Monitoring and I/O Products',
        measurementMeters: 'Measurement Meters',
        automationControllers: 'Automation Controllers',
        industrialComputers: 'Industrial Computers',
        securityGateways: 'Security Gateways and Serial Servers',
        switches: 'Switches',
        multiplexers: 'Multiplexers',
        clockProducts: 'Clock Products',
        softwareProducts: 'Software Products',
        
        // SEL产品描述
        // busTieProtection: 'Bus-tie Protection',
        // feederProtection: 'Feeder Protection',
        // incomingFeederBusControl: 'Incoming, Bus-tie, Feeder Protection, Bay Control Unit',
        // doubleOvercurrentProtection: 'Double Overcurrent Protection',
        // overcurrentProtection: 'Overcurrent Protection',
        // rotorGroundProtection: 'Rotor Ground Protection',
        // statorGroundProtection: 'Stator Ground Protection',
        // transformerCurrentDifferential: 'Transformer Current Differential Protection',
        // transformerMonitor: 'Transformer Monitoring Device',
        // lineDifferentialProtection: 'Line Differential Protection',
        // lineProtectionSystem: 'Line Protection System (Fiber Differential + Distance Protection, etc.)',
        // lineDistanceProtection: 'Line Protection (Distance Protection, etc.)',
        // busProtectionRelay: 'Bus Protection',
        // highImpedanceDifferential: 'High Impedance Differential Protection',
        // programmableAutomationController: 'Programmable Automation Controller',
        // digitalProgrammableController: 'Digital Programmable Automation Controller',
        // remoteTerminalModule: 'Remote 8DI/8DO Terminal Module',
        // serialOpticalConverter: 'Serial-to-Optical Converter',
        // powerQualityMeter: 'Power Quality and Revenue Meter',
        // realtimeAutomationController: 'Real-time Automation Controller',
        // bcuRtuPmuController: 'Available for BCU, RTU, PMU, etc.',
        // industrialComputer: 'Industrial Computer',
        // serialServer: 'Serial Server',
        // securityGateway: 'Security Gateway',
        // rackMountSwitch24: '24-port Rack-mount Switch',
        // switch5Port: '5-port Switch',
        // sdnRackSwitch24: '24-port Rack-mount SDN Switch',
        // sdnRailSwitch12: '12-port DIN Rail SDN Switch',
        // multiplexer: 'Multiplexer',
        // satelliteSyncClock: 'Satellite Synchronized Network Clock',
        // satelliteTimeClock: 'Satellite Synchronized Clock',
        // irigDistributionModule: 'IRIG-B Distribution Module',
        // irigFiberTransceiver: 'High-precision IRIG-B Fiber Transceiver',
        // acselQuickset: 'AcSELerator QuickSet Software',
        // acselArchitect: 'AcSELerator Architect Software',
        // acselRtac: 'AcSELerator RTAC Software',
        // acselDiagram: 'AcSELerator Diagram Builder Software',
        // selGridConfig: 'SEL Grid Configurator',
        // sdnTrafficControl: 'Software Defined Network Traffic Control Software',
        // sdnApplicationSuite: 'Software Defined Network Application Suite',
        // acselTeam: 'AcSELerator TEAM Software',
        // synchrowaveCenter: 'SynchroWAVe Synchrophasor Data Concentrator Software',
        // synchrowaveAnalysis: 'SynchroWAVe Oscillography Analysis Software',
        // synchrowaveOperations: 'SynchroWAVe Synchrophasor Operations Software',
        // synchrowaveMonitor: 'SynchroWAVe Synchrophasor Monitor Software',
        // synchrowaveReports: 'SynchroWAVe Reports Software',
        
        // // 所有产品描述
        // motorProtectionDesc: 'Motor Protection',
        // generatorProtectionDesc: 'Generator Protection',
        // transformerProtectionDesc: 'Transformer Protection',
        // lineProtectionDesc: 'Line Protection',
        // lineDifferentialProtectionDesc: 'Line Differential Protection',
        // lineDistanceProtectionDesc: 'Line Protection (Distance Protection, etc.)',
        // busProtectionDesc: 'Bus Protection',
        // feederProtectionDesc: 'Feeder Protection',
        // industrialComputerDesc: 'Industrial Computer',
        // serialServerDesc: 'Serial Server',
        // securityGatewayDesc: 'Security Gateway',
        // switch24Port: '24-port Rack-mount Switch',
        // switch5Port: '5-port Switch',
        // sdnSwitch24Port: '24-port Rack-mount SDN Switch',
        // sdnSwitch12Port: '12-port DIN Rail SDN Switch',
        // multiplexerDesc: 'Multiplexer',
        // satelliteSyncNetworkClock: 'Satellite Synchronized Network Clock',
        // satelliteSyncClock: 'Satellite Synchronized Clock',
        // irigDistribution: 'IRIG-B Distribution Module',
        // irigFiberTransceiver: 'High-precision IRIG-B Fiber Transceiver',
        // sdnTrafficControlSoftware: 'Software Defined Network Traffic Control Software',
        // sdnApplicationSuite: 'Software Defined Network Application Suite',
        // synchrowaveCenterDesc: 'SynchroWAVe Synchrophasor Data Concentrator Software',
        // synchrowaveAnalysisDesc: 'SynchroWAVe Oscillography Analysis Software',
        // synchrowaveOperationsDesc: 'SynchroWAVe Synchrophasor Operations Software',
        // synchrowaveMonitorDesc: 'SynchroWAVe Synchrophasor Monitor Software',
        // synchrowaveReportsDesc: 'SynchroWAVe Reports Software',

        // // 日立能源产品页面
        // hitachiTitle: 'Hitachi Energy Products - Chengdu Sunray Technology Co., Ltd. | Hitachi Authorized Dealer',
        cableAccessories245kV: '1-245kV Cable Accessories',
        capacitorsFilters: 'Capacitors and Filters',
        transformers: 'Transformers',
        
        // Product page banners and descriptions
        hitachiBanner: 'We provide high-quality Hitachi Energy products and solutions',
        switchgearBanner: 'We provide high-quality control panel components compliant with UL and CE standards',
        solutionsBanner: 'We provide comprehensive power system automation solutions, one-stop service from assembly to acceptance',

        // 开关柜组件页面
        switchgearTitle: 'Power Control Panel Components - Chengdu Sunray Technology Co., Ltd.',
        switchgearDescription: 'Chengdu Sunray Technology Co., Ltd. professionally provides switchgear component products, including auxiliary relays, transfer switches, test switches and other high-quality power control equipment.',
        switchgearKeywords: 'switchgear components,auxiliary relays,transfer switches,test switches,power control,Chengdu Sunray',
        auxiliaryRelays: 'Auxiliary Relays',
        transferSwitches: 'Transfer Switches',
        testSwitches: 'Test Switches',

        // 解决方案页面
        solutionsTitle: 'Solutions - Chengdu Sunray Technology Co., Ltd.',
        solutionsDescription: 'Chengdu Sunray Technology Co., Ltd. provides comprehensive power system solutions, including panel assembly, commissioning, system integration, inspection, fault analysis, simulation and other professional technical services.',
        solutionsKeywords: 'solutions,panel assembly,commissioning,system integration,inspection,fault analysis,simulation,power systems,technical services',
        panelAssembly: 'Panel Assembly',
        panelAssemblyDesc: 'Professional panel assembly services ensuring precise installation and reliable connection of every component',
        commissioning: 'Commissioning',
        commissioningDesc: 'Comprehensive system commissioning services ensuring stable and reliable equipment operation',
        integration: 'System Integration',
        integrationDesc: 'Intelligent system integration solutions achieving equipment interconnection and intelligent management',
        faultAnalysis: 'Fault Analysis',
        faultAnalysisDesc: 'Professional fault diagnosis and analysis services for rapid problem identification and resolution',
        simulation: 'Simulation',
        simulationDesc: 'Advanced system simulation and modeling technology to optimize system performance and reliability',
        inspection: 'Inspection',
        inspectionDesc: 'Strict quality inspection processes ensuring equipment meets industry standards and regulatory requirements',

         // 职位详情页面
        returnToJobList: 'Return to Job List',
        jobDescription: 'Job Description',
        jobRequirements: 'Job Requirements',
        qualifications: 'Qualifications',
        sendResumeTo: 'Send Resume to',
        // salesEngineer: 'Electrical & Instrumentation Sales Engineer',
        // applicationEngineer: 'Electrical & Instrumentation Application Engineer',
        // internApplicationEngineer: 'Intern - Electrical & Instrumentation Application Engineer',
        experienceRequired: '+ years',
        applyByEmail: 'Send Resume to info@e-sunray.com',
        // freshGraduateStudent: 'Fresh Graduate/Student',
        
        // // 项目经理职位详情
        // projectManagerJobTitle: 'Project Manager',
        // projectManagerJobDesc: 'Overall planning and design, organization and implementation, completion and acceptance of automation engineering projects, power distribution projects, and substation automation engineering projects, as well as organization, coordination and process monitoring during project implementation, including quality control, schedule control and cost control of engineering projects.',
        // projectManagerReq1: 'Age between 25-40 years old',
        // projectManagerReq2: 'Bachelor\'s degree or above, majoring in electrical automation or related fields, or rich experience in electrical automation engineering commissioning and management',
        // projectManagerReq3: '3+ years of work experience',
        // projectManagerReq4: 'Proficient in using OFFICE, AutoCAD and other software',
        // projectManagerQual1: 'Proactive, dedicated, outgoing personality, passionate, with good communication skills',
        // projectManagerQual2: 'Experience in substation relay protection and integrated automation system design and commissioning',
        // projectManagerQual3: 'Able to adapt to short-term business trips',
        // projectManagerQual4: 'Company provides product knowledge training and professional technical support',
        // projectManagerQual5: 'Team spirit',
        
        // // 销售工程师职位详情
        // salesEngineerJobTitle: 'Electrical & Instrumentation Sales Engineer',
        // salesEngineerJobDesc: 'Sales of SEL substation integrated automation systems and microcomputer protection products; responsible for market development and maintenance in assigned areas; responsible for project bidding and user communication.',
        // salesEngineerReq1: 'Age between 25-40 years old',
        // salesEngineerReq2: 'Bachelor\'s degree or above, majoring in electrical automation or related fields',
        // salesEngineerReq3: '2+ years of work experience',
        // salesEngineerReq4: 'Proficient in using OFFICE and other software',
        // salesEngineerQual1: 'Proactive, dedicated, outgoing personality, passionate, with good communication skills',
        // salesEngineerQual2: 'Sales experience or power industry experience',
        // salesEngineerQual3: 'Able to adapt to business trips',
        // salesEngineerQual4: 'Company provides product knowledge training and professional technical support',
        // salesEngineerQual5: 'Team spirit',
        
        // // 应用工程师职位详情
        // applicationEngineerJobTitle: 'Electrical & Instrumentation Application Engineer',
        // applicationEngineerJobDesc: 'According to the arrangement of project supervisors, timely complete production debugging, after-sales service and customer technical training for relay protection, monitoring systems and other products; provide feedback on issues, establish good customer relationships, collect and transmit customer feedback on company products; complete filing work on time as required.',
        // applicationEngineerReq1: 'Age between 25-35 years old',
        // applicationEngineerReq2: 'Bachelor\'s degree or above, majoring in electrical automation or related fields',
        // applicationEngineerReq3: '2+ years of work experience',
        // applicationEngineerReq4: 'Proficient in using OFFICE, AutoCAD and other software',
        // applicationEngineerQual1: 'Proactive, dedicated, with good communication skills',
        // applicationEngineerQual2: 'Experience in relay protection or power automation related work',
        // applicationEngineerQual3: 'Able to adapt to business trips',
        // applicationEngineerQual4: 'Company provides product knowledge training and professional technical support',
        // applicationEngineerQual5: 'Team spirit',
        
        // // 实习应用工程师职位详情
        // internApplicationEngineerJobTitle: 'Intern - Electrical & Instrumentation Application Engineer',
        // internApplicationEngineerJobDesc: 'Assist engineers in production debugging, technical support and other work for relay protection, monitoring systems and other products; learn relevant technical knowledge and participate in project implementation; assist in completing relevant technical documentation.',
        // internApplicationEngineerReq1: 'Current students or fresh graduates',
        // internApplicationEngineerReq2: 'Majoring in electrical automation or related fields',
        // internApplicationEngineerReq3: 'Some understanding of power systems',
        // internApplicationEngineerReq4: 'Proficient in using OFFICE and other software',
        // internApplicationEngineerQual1: 'Strong learning ability, proactive',
        // internApplicationEngineerQual2: 'Good communication skills',
        // internApplicationEngineerQual3: 'Able to adapt to business trips',
        // internApplicationEngineerQual4: 'Company provides comprehensive training system',
        // internApplicationEngineerQual5: 'Team spirit'

      }
    };
    
    this.init();
  }

  init() {
    this.updateLanguage();
    this.addLanguageToggle();
  }

  updateLanguage() {
    // 更新页面语言属性
    document.documentElement.lang = this.currentLanguage;
    
    // 更新所有具有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = this.getTranslation(key);
      if (translation !== null) {
        element.innerHTML = translation;
      }
    });
    
    // 更新meta标签
    this.updateMetaTags();
    
    // 保存到localStorage
    localStorage.setItem('language', this.currentLanguage);
  }

  updateMetaTags() {
    const translations = this.translations[this.currentLanguage];
    
    // 更新title
    document.title = translations.metaTitle;
    
    // 更新meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = translations.metaDescription;
    }
    
    // 更新meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.content = translations.metaKeywords;
    }
    
    // 更新OpenGraph标签
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.content = translations.metaTitle;
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.content = translations.metaDescription;
    }
    
    // 更新Twitter标签
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.content = translations.metaTitle;
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.content = translations.metaDescription;
    }
  }

  addLanguageToggle() {
    // 查找桌面导航栏
    const desktopNav = document.querySelector('nav.hidden.md\\:flex');
    const mobileMenu = document.querySelector('#mobileMenu .flex.flex-col');
    
    if (desktopNav) {
      // 创建桌面端语言下拉菜单容器
      const languageDropdownContainer = document.createElement('div');
      languageDropdownContainer.className = 'relative';
      
      // 创建语言按钮
      const languageBtn = document.createElement('button');
      languageBtn.className = 'nav-link text-white hover:text-gray-200 flex items-center gap-1';
      languageBtn.id = 'languageDropdownBtn';
      languageBtn.innerHTML = `
        <i class="ri-global-line"></i>
        <span>${this.currentLanguage === 'zh' ? '中' : 'Eng'}</span>
        <i class="ri-arrow-down-s-line"></i>
      `;
      
      // 创建下拉菜单
      const languageDropdown = document.createElement('div');
      languageDropdown.id = 'languageDropdown';
      languageDropdown.className = 'absolute hidden w-32 bg-white rounded-lg shadow-lg py-2 mt-2 right-0';
      languageDropdown.innerHTML = `
        <button class="block w-full px-4 py-2 text-gray-800 hover:text-primary text-left relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 text-base" data-lang="zh">
          中文
        </button>
        <button class="block w-full px-4 py-2 text-gray-800 hover:text-primary text-left relative after:absolute after:bottom-1 after:left-4 after:right-4 after:h-0.5 after:bg-primary after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 text-base" data-lang="en">
          English
        </button>
      `;
      
      // 添加点击事件到语言选项
      languageDropdown.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-lang')) {
          const selectedLang = e.target.getAttribute('data-lang');
          this.setLanguage(selectedLang);
          languageDropdown.classList.add('hidden');
        }
      });
      
      // 组装下拉菜单
      languageDropdownContainer.appendChild(languageBtn);
      languageDropdownContainer.appendChild(languageDropdown);
      
      // 添加到导航栏末尾
      desktopNav.appendChild(languageDropdownContainer);
      
      // 设置下拉菜单交互
      this.setupLanguageDropdown(languageDropdownContainer, languageBtn, languageDropdown);
    }
    
    if (mobileMenu) {
      // 创建移动端语言切换区域
      const mobileLanguageSection = document.createElement('div');
      mobileLanguageSection.innerHTML = `
        <p class="text-white text-xl font-medium border-b border-gray-700 pb-3">语言 / Language</p>
        <div class="pl-4 pt-2 pb-2">
          <button class="block text-white text-lg py-2 touch-target" data-lang="zh">中文</button>
          <button class="block text-white text-lg py-2 touch-target" data-lang="en">English</button>
        </div>
      `;
      
      // 添加点击事件到移动端语言选项
      mobileLanguageSection.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-lang')) {
          const selectedLang = e.target.getAttribute('data-lang');
          this.setLanguage(selectedLang);
          // 关闭移动菜单
          const mobileMenuEl = document.getElementById('mobileMenu');
          const mobileMenuButton = document.getElementById('mobileMenuButton');
          if (mobileMenuEl && mobileMenuButton) {
            mobileMenuEl.classList.add('hidden');
            mobileMenuButton.innerHTML = '<i class="ri-menu-line ri-2x"></i>';
          }
        }
      });
      
      // 添加到移动菜单末尾
      mobileMenu.appendChild(mobileLanguageSection);
    }
  }

  setupLanguageDropdown(container, button, dropdown) {
    let isDropdownOpen = false;
    let dropdownTimeout;
    
    container.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
      dropdown.classList.remove('hidden');
      isDropdownOpen = true;
    });
    
    container.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(function() {
        dropdown.classList.add('hidden');
        isDropdownOpen = false;
      }, 300);
    });
    
    dropdown.addEventListener('mouseenter', function() {
      clearTimeout(dropdownTimeout);
    });
    
    dropdown.addEventListener('mouseleave', function() {
      dropdownTimeout = setTimeout(function() {
        dropdown.classList.add('hidden');
        isDropdownOpen = false;
      }, 300);
    });
    
    document.addEventListener('click', function(e) {
      if (!dropdown.contains(e.target) && !button.contains(e.target)) {
        dropdown.classList.add('hidden');
        isDropdownOpen = false;
      }
    });
    
    dropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }

  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'zh' ? 'en' : 'zh';
    this.updateLanguage();
    this.updateLanguageButtonDisplay();
  }

  updateLanguageButtonDisplay() {
    // 更新桌面端语言下拉按钮显示
    const desktopLanguageBtn = document.querySelector('#languageDropdownBtn span');
    if (desktopLanguageBtn) {
      desktopLanguageBtn.textContent = this.currentLanguage === 'zh' ? '中' : 'Eng';
    }
  }

  getTranslation(key) {
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        return null;
      }
    }
    
    return translation;
  }

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLanguage = lang;
      this.updateLanguage();
      this.updateLanguageButtonDisplay();
    }
  }

}

// 初始化语言管理器
document.addEventListener('DOMContentLoaded', function() {
  window.languageManager = new LanguageManager();
});