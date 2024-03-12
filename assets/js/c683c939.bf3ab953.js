"use strict";(self.webpackChunkcholog_docu=self.webpackChunkcholog_docu||[]).push([[5871],{5654:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>t});var i=r(4848),o=r(8453);const s={sidebar_position:7},l="Spring Core 2",c={id:"spring/spring-core-2",title:"Spring Core 2",description:"1. Java-based Configuration",source:"@site/docs/spring/spring-core-2.md",sourceDirName:"spring",slug:"/spring/spring-core-2",permalink:"/docs/spring/spring-core-2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Spring Core 1",permalink:"/docs/spring/spring-core-1"}},a={},t=[{value:"1. Java-based Configuration",id:"1-java-based-configuration",level:2},{value:"1.1. Declaring a Bean",id:"11-declaring-a-bean",level:3},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8",level:4},{value:"1.2 Bean Dependencies",id:"12-bean-dependencies",level:3},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-1",level:4},{value:"2. Property",id:"2-property",level:2},{value:"2.1. Using @PropertySource and Environment",id:"21-using-propertysource-and-environment",level:3},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-2",level:4},{value:"2.2. Using @PropertySource and @Value",id:"22-using-propertysource-and-value",level:3},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-3",level:4},{value:"2.3. Externalized Configuration (Spring Boot)",id:"23-externalized-configuration-spring-boot",level:3},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-4",level:4},{value:"3. Profile",id:"3-profile",level:2},{value:"3.1. @Profile",id:"31-profile",level:3},{value:"@Configuration \ud074\ub798\uc2a4\uc5d0 \uc801\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"configuration-\ud074\ub798\uc2a4\uc5d0-\uc801\uc6a9\ud558\ub294-\uacbd\uc6b0",level:4},{value:"@Bean \uba54\uc11c\ub4dc\uc5d0 \uc801\uc6a9\ud558\ub294 \uacbd\uc6b0",id:"bean-\uba54\uc11c\ub4dc\uc5d0-\uc801\uc6a9\ud558\ub294-\uacbd\uc6b0",level:4},{value:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8",id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-5",level:4},{value:"4. \ub354 \uc0dd\uac01\ud574\ubcf4\uae30",id:"4-\ub354-\uc0dd\uac01\ud574\ubcf4\uae30",level:2},{value:"5. \ucc38\uace0\uc790\ub8cc",id:"5-\ucc38\uace0\uc790\ub8cc",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"spring-core-2",children:"Spring Core 2"}),"\n",(0,i.jsx)(n.h2,{id:"1-java-based-configuration",children:"1. Java-based Configuration"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/spring/spring-core-2",children:"spring-core-1"}),"\uc5d0\uc11c\ub294 ",(0,i.jsx)(n.code,{children:"@Component"}),", ",(0,i.jsx)(n.code,{children:"@Autowired"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud574 \uc2a4\ud504\ub9c1 \ube48\uc744 \uc0dd\uc131\ud558\uace0 \ube48\uac04 \uc758\uc874\uc131\uc744 \uc8fc\uc785\ud558\ub294 \ubc29\ubc95\uc744 \uc775\ud614\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.p,{children:"\uc774 \ubb38\uc11c\uc5d0\uc11c\ub294 Java \ucf54\ub4dc\uc640 \uc2a4\ud504\ub9c1\uc774 \uc81c\uacf5\ud558\ub294 \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud574 \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\ub97c \uc815\uc758\ud558\ub294 \ubc95\uc744 \uc54c\uc544\ubd05\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.h3,{id:"11-declaring-a-bean",children:"1.1. Declaring a Bean"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Configuration"})," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \ub2ec\ub9b0 \ud074\ub798\uc2a4\uc640 ",(0,i.jsx)(n.code,{children:"@Bean"})," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \ub2ec\ub9b0 \uba54\uc11c\ub4dc\ub97c \ud1b5\ud574 Java \ucf54\ub4dc\uc5d0\uc11c \uc2a4\ud504\ub9c1 \ube48\uc744 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\uac00\uc7a5 \ub2e8\uc21c\ud55c ",(0,i.jsx)(n.code,{children:"@Configuration"})," \ud074\ub798\uc2a4\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class AppConfig {\n  @Bean\n  public MyServiceImpl myService() {\n    return new MyServiceImpl();\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc: ",(0,i.jsx)(n.code,{children:"cholog.configuration.ConfigTest.shouldCreateBean"})]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.configuration.config.AppConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"12-bean-dependencies",children:"1.2 Bean Dependencies"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Configuration"})," \uc5b4\ub178\ud14c\uc774\uc158\uc774 \uc788\ub294 \ud074\ub798\uc2a4 \ub0b4\uc758 \uba54\uc11c\ub4dc\ub294 \uac19\uc740 \ud074\ub798\uc2a4 \ub0b4\uc758 \ub2e4\ub978 ",(0,i.jsx)(n.code,{children:"@Bean"})," \uba54\uc11c\ub4dc\ub97c \ud638\ucd9c\ud558\uc5ec \ube48 \uac04\uc758 \uc758\uc874\uc131\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:"@Configuration\npublic class AppConfig {\n\n  @Bean\n  public BeanOne beanOne() {\n    return new BeanOne(beanTwo());\n  }\n\n  @Bean\n  public BeanTwo beanTwo() {\n    return new BeanTwo();\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\ub2e4\ub978 ",(0,i.jsx)(n.code,{children:"@Configuration"})," \ud074\ub798\uc2a4 \ub0b4\uc758 \ube48\uc744 \uc0ac\uc6a9\ud574\uc11c\ub3c4 \uc758\uc874\uc131\uc744 \uc815\uc758\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ubc29\ubc95\uc5d0 \ub300\ud574\uc11c\ub294 ",(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html#beans-java-dependencies",children:"Spring - Bean Dependencies"})," \ubb38\uc11c\ub97c \ucc38\uace0\ud574 \uc8fc\uc138\uc694."]}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-1",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc: ",(0,i.jsx)(n.code,{children:"cholog.configuration.ConfigTest.shouldCreateBeansThatHasDependency"})]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.configuration.config.AppConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"2-property",children:"2. Property"}),"\n",(0,i.jsx)(n.p,{children:"\ud504\ub85c\ud37c\ud2f0\ub294 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uad6c\uc131\uac12\uc744 \ud0a4-\uac12 \uc30d\uc73c\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ub370\uc774\ud130\ubca0\uc774\uc2a4 \uc5f0\uacb0 \uc815\ubcf4\ub098 API \ud0a4 \uac19\uc740 \uc124\uc815\uac12\uc785\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["\uc2a4\ud504\ub9c1\uc758 ",(0,i.jsx)(n.code,{children:"Environment"})," \uc778\ud130\ud398\uc774\uc2a4\ub294 \uc774\ub7ec\ud55c \ud504\ub85c\ud37c\ud2f0 \uc18c\uc2a4\ub4e4\uc744 \ud1b5\ud569\ud558\uc5ec \uad00\ub9ac\ud558\uace0, \ud544\uc694\ud55c \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \uc870\ud68c\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"21-using-propertysource-and-environment",children:"2.1. Using @PropertySource and Environment"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@PropertySource"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud574 \ud504\ub85c\ud37c\ud2f0 \ud30c\uc77c\uc744 \ub85c\ub4dc\ud558\uace0 ",(0,i.jsx)(n.code,{children:"Environment"}),"\ub97c \uc0ac\uc6a9\ud574 \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \uc77d\uc5b4\uc62c \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Configuration\n@PropertySource("classpath:/com/myco/app.properties")\npublic class AppConfig {\n\n  @Autowired\n  Environment env;\n\n  @Bean\n  public TestBean testBean() {\n    TestBean testBean = new TestBean();\n    testBean.setName(env.getProperty("testbean.name"));\n    return testBean;\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-2",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc: ",(0,i.jsx)(n.code,{children:"cholog.property.PropertySourceConfigTest.getPropertyValueFromUsingEnvironment"})]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.property.config.PropertySourceConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"22-using-propertysource-and-value",children:"2.2. Using @PropertySource and @Value"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@PropertySource"}),"\ub97c \uc0ac\uc6a9\ud574 \ub85c\ub4dc\ud55c \ud504\ub85c\ud37c\ud2f0 \ud30c\uc77c\uc758 \uac12\uc744 ",(0,i.jsx)(n.code,{children:"@Value"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \ud1b5\ud574 \uc8fc\uc785\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Configuration\n@PropertySource("classpath:/com/myco/app.properties")\npublic class AppConfig {\n  @Bean\n  public TestBean testBean(@Value("${testbean.name}") String name) {\n    TestBean testBean = new TestBean();\n    testBean.setName(name);\n    return testBean;\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-3",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc: ",(0,i.jsx)(n.code,{children:"cholog.property.PropertySourceConfigTest.getPropertyValueFromUsingAnnotation"})]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.property.config.PropertySourceConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"23-externalized-configuration-spring-boot",children:"2.3. Externalized Configuration (Spring Boot)"}),"\n",(0,i.jsxs)(n.p,{children:["\ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \uc124\uc815\ud558\ub294 \ubc29\ubc95\uc740 ",(0,i.jsx)(n.code,{children:"@PropertySource"})," \uc678\uc5d0\ub3c4 \ub2e4\uc591\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsxs)(n.p,{children:["\ud2b9\ud788 Spring Boot \ub97c \uc0ac\uc6a9\ud55c\ub2e4\uba74 ",(0,i.jsx)(n.code,{children:"application.properties"}),"(\ud639\uc740 ",(0,i.jsx)(n.code,{children:"application.yaml"}),") \ud30c\uc77c\uc744 \uc0ac\uc6a9\ud574 \ud504\ub85c\ud37c\ud2f0 \uac12\uc744 \ud3b8\ud558\uac8c \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-4",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc: ",(0,i.jsx)(n.code,{children:"cholog.property.ConfigDataFileTest.getPropertyValueWithSpringBoot"})]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.property.config.AuthConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"3-profile",children:"3. Profile"}),"\n",(0,i.jsx)(n.p,{children:"\ud504\ub85c\ud30c\uc77c\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158 \uc124\uc815\uc758 \ub17c\ub9ac\uc801\uc778 \uadf8\ub8f9\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uac1c\ubc1c(development), \ud14c\uc2a4\ud2b8(testing), \uc6b4\uc601(production)\uacfc \uac19\uc774 \ub2e4\ub978 \ud658\uacbd\uc5d0 \uc801\ud569\ud55c \uc124\uc815\uc744 \ubd84\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.p,{children:"\ud504\ub85c\ud30c\uc77c\uc744 \uc0ac\uc6a9\ud558\uba74 \uac19\uc740 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc774\uc9c0\ub9cc \ud658\uacbd\uc5d0 \ub530\ub77c \ub2e4\ub978 \uad6c\uc131\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsxs)(n.p,{children:["\uc2a4\ud504\ub9c1\uc774 \uc81c\uacf5\ud558\ub294 ",(0,i.jsx)(n.code,{children:"Environment"})," \uc778\ud130\ud398\uc774\uc2a4\ub294 \ud604\uc7ac \ud65c\uc131\ud654\ub418\uc5b4 \uc788\ub294 \ud504\ub85c\ud30c\uc77c\uacfc \uae30\ubcf8 \ud504\ub85c\ud30c\uc77c\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h3,{id:"31-profile",children:"3.1. @Profile"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@Profile"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc774\uc6a9\ud558\uc5ec \ud2b9\uc815 \ud504\ub85c\ud30c\uc77c\uc5d0 \ub530\ub77c \ube48\uc744 \ub4f1\ub85d\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\n",(0,i.jsx)(n.code,{children:"@Profile"})," \uc5b4\ub178\ud14c\uc774\uc158\uc740 \ud074\ub798\uc2a4 \ub808\ubca8, \uba54\uc11c\ub4dc \ub808\ubca8\uc5d0 \ubaa8\ub450 \uc801\uc6a9 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.h4,{id:"configuration-\ud074\ub798\uc2a4\uc5d0-\uc801\uc6a9\ud558\ub294-\uacbd\uc6b0",children:"@Configuration \ud074\ub798\uc2a4\uc5d0 \uc801\uc6a9\ud558\ub294 \uacbd\uc6b0"}),"\n",(0,i.jsxs)(n.p,{children:["\ud074\ub798\uc2a4 \ub0b4\uc5d0\uc11c \uc815\uc758\ub41c Bean\ub4e4\uc740 ",(0,i.jsx)(n.code,{children:"development"})," profile\uc77c \ub54c\ub9cc \ub4f1\ub85d\ub429\ub2c8\ub2e4."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Configuration\n@Profile("development")\npublic class StandaloneDataConfig {\n\n\t@Bean\n\tpublic DataSource dataSource() {\n\t\treturn new EmbeddedDatabaseBuilder()\n\t\t\t.setType(EmbeddedDatabaseType.HSQL)\n\t\t\t.addScript("classpath:com/bank/config/sql/schema.sql")\n\t\t\t.addScript("classpath:com/bank/config/sql/test-data.sql")\n\t\t\t.build();\n\t}\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"bean-\uba54\uc11c\ub4dc\uc5d0-\uc801\uc6a9\ud558\ub294-\uacbd\uc6b0",children:"@Bean \uba54\uc11c\ub4dc\uc5d0 \uc801\uc6a9\ud558\ub294 \uacbd\uc6b0"}),"\n",(0,i.jsx)(n.p,{children:"profile\uc5d0 \ub530\ub77c \ub4f1\ub85d\ub418\ub294 Datasource Bean\uc774 \ub2ec\ub77c\uc9d1\ub2c8\ub2e4."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'@Configuration\npublic class AppConfig {\n\n  @Bean("dataSource")\n  @Profile("development")\n  public DataSource standaloneDataSource() {\n    return new EmbeddedDatabaseBuilder()\n            .setType(EmbeddedDatabaseType.HSQL)\n            .addScript("classpath:com/bank/config/sql/schema.sql")\n            .addScript("classpath:com/bank/config/sql/test-data.sql")\n            .build();\n  }\n\n  @Bean("dataSource")\n  @Profile("production")\n  public DataSource jndiDataSource() throws Exception {\n    Context ctx = new InitialContext();\n    return (DataSource) ctx.lookup("java:comp/env/jdbc/datasource");\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"\ud559\uc2b5-\ud14c\uc2a4\ud2b8-5",children:"\ud559\uc2b5 \ud14c\uc2a4\ud2b8"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\ud14c\uc2a4\ud2b8 \uba54\uc11c\ub4dc:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cholog.profile.ProfileConfigTest.shouldCreateInmemoryRepositoryBean"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cholog.profile.ProfileConfigTest.shouldCreateJdbcRepositoryBean"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\uc218\ud589 \ubc29\ubc95","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"cholog.profile.config.ProfileConfig"})," \ud074\ub798\uc2a4\ub97c \uc774\uc6a9\ud558\uc5ec \ud559\uc2b5 \ud14c\uc2a4\ud2b8\ub97c \uc131\uacf5\uc2dc\ud0a4\uc138\uc694."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"4-\ub354-\uc0dd\uac01\ud574\ubcf4\uae30",children:"4. \ub354 \uc0dd\uac01\ud574\ubcf4\uae30"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\ub97c \uc815\uc758\ud558\ub294 \ubc29\ubc95\uc740 \ub2e4\uc591\ud569\ub2c8\ub2e4.",(0,i.jsx)(n.code,{children:"@Component"}),", ",(0,i.jsx)(n.code,{children:"@Autowired"})," \uc5b4\ub178\ud14c\uc774\uc158\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uacfc \ube44\uad50\ud558\uc5ec Java \ucf54\ub4dc\ub85c \ube48\uc744 \uad00\ub9ac\ud560 \ub54c\uc758 \uc7a5\ub2e8\uc810\uc5d0 \ub300\ud574 \uc0dd\uac01\ud574\ubcf4\uace0, \uc5b4\ub5a4 \uc0c1\ud669\uc5d0\uc11c \uc5b4\ub5a4 \ubc29\uc2dd\uc744 \ud0dd\ud560\uc9c0 \uace0\ubbfc\ud574\ubcf4\uc138\uc694."]}),"\n",(0,i.jsx)(n.li,{children:"\uc774 \uc678\uc5d0\ub3c4 XML\uc744 \uc0ac\uc6a9\ud574 \uc2a4\ud504\ub9c1 \ucee8\ud14c\uc774\ub108\ub97c \uc815\uc758\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. XML\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uace0, Java \ucf54\ub4dc\uc640 XML\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ube44\uad50\ud574\ubcf4\uc138\uc694."}),"\n",(0,i.jsxs)(n.li,{children:["Spring Boot\ub294 \ud504\ub85c\ud37c\ud2f0 \ud30c\uc77c \ucee8\ubca4\uc158(",(0,i.jsx)(n.code,{children:"application-{profile}"}),")\uc744 \uc0ac\uc6a9\ud574 \ud65c\uc131 \ud504\ub85c\ud30c\uc77c\uc5d0 \ub300\ud55c \ud504\ub85c\ud37c\ud2f0 \ud30c\uc77c\uc744 \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \ud65c\uc131 \ud504\ub85c\ud30c\uc77c\uc774 prod \ub77c\uba74 ",(0,i.jsx)(n.code,{children:"application.properties"}),", ",(0,i.jsx)(n.code,{children:"application-prod.properties"})," \ud30c\uc77c\uc744 \ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud2b9\uc131\uc744 \uc0ac\uc6a9\ud574 \uc5b4\ub5a4 \uac12\uc744 \ud504\ub85c\ud37c\ud2f0 \ud30c\uc77c\uc5d0\uc11c \uad00\ub9ac\ud560\uc9c0 \uc0dd\uac01\ud574 \ubcf4\uc138\uc694."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"5-\ucc38\uace0\uc790\ub8cc",children:"5. \ucc38\uace0\uc790\ub8cc"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html",children:"Spring - @Configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html",children:"Spring - @Bean"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/environment.html#beans-using-propertysource",children:"Spring - @PropertySource"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config",children:"Spring Boot - Externalized Configuration"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/value-annotations.html",children:"Spring - @Value"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-framework/reference/core/beans/environment.html#beans-definition-profiles-java",children:"Spring - @Profile"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/features.html#features.external-config.files.profile-specific",children:"Spring Boot - Profile Specific Files"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>c});var i=r(6540);const o={},s=i.createContext(o);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);