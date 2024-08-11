"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[5412],{7431:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var t=n(74848),s=n(28453);const a={sidebar_position:12},r="Feasibility Study on Implementing OpenCTI",o={id:"cybersecurity/research/feasibility study on OpenCTI",title:"Feasibility Study on Implementing OpenCTI",description:"Feasibility Study on Implementing OpenCTI",source:"@site/docs/cybersecurity/research/feasibility study on OpenCTI.md",sourceDirName:"cybersecurity/research",slug:"/cybersecurity/research/feasibility study on OpenCTI",permalink:"/redback-documentation/docs/cybersecurity/research/feasibility study on OpenCTI",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/research/feasibility study on OpenCTI.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"How We Can Monitor Major Areas",permalink:"/redback-documentation/docs/cybersecurity/research/major-areas-response"},next:{title:"Jenkins Automation Security",permalink:"/redback-documentation/docs/cybersecurity/research/jenkins-security"}},l={},c=[{value:"INTRODUCTION",id:"introduction",level:2},{value:"Purpose of the Study",id:"purpose-of-the-study",level:3},{value:"Background Information on OpenCTI",id:"background-information-on-opencti",level:3},{value:"OBJECTIVES",id:"objectives",level:2},{value:"Primary Goal",id:"primary-goal",level:3},{value:"Specific Objectives",id:"specific-objectives",level:3},{value:"FUNCTIONAL ANALYSIS",id:"functional-analysis",level:2},{value:"Overview of OpenCTI\u2019s Features",id:"overview-of-openctis-features",level:3},{value:"Comparison with Organizational Requirements",id:"comparison-with-organizational-requirements",level:2},{value:"Cybersecurity Team Needs:",id:"cybersecurity-team-needs",level:3},{value:"Project-Specific Needs:",id:"project-specific-needs",level:3},{value:"Key Features Aligned with Organizational Needs",id:"key-features-aligned-with-organizational-needs",level:3},{value:"TECHNICAL ASSESSMENT",id:"technical-assessment",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Scalability",id:"scalability",level:3},{value:"Deployment Considerations",id:"deployment-considerations",level:3},{value:"Maintenance and Support",id:"maintenance-and-support",level:3},{value:"SECURITY AND COMPLIANCE",id:"security-and-compliance",level:3},{value:"INTEGRATION POTENTIAL",id:"integration-potential",level:3},{value:"USER EXPERIENCE AND TRAINING",id:"user-experience-and-training",level:3},{value:"COST-BENEFIT ANALYSIS",id:"cost-benefit-analysis",level:3},{value:"RISK ASSESSMENT",id:"risk-assessment",level:2},{value:"ALTERNATIVE SOLUTIONS",id:"alternative-solutions",level:2},{value:"CONCLUSION",id:"conclusion",level:2}];function d(e){const i={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"feasibility-study-on-implementing-opencti",children:"Feasibility Study on Implementing OpenCTI"}),"\n",(0,t.jsx)(i.p,{children:"Feasibility Study on Implementing OpenCTI"}),"\n",(0,t.jsx)(i.admonition,{type:"info",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"Last Edited:"})," 8 August 2024. ",(0,t.jsx)(i.strong,{children:"Authors:"})," Devika Sivakumar  ",(0,t.jsx)(i.strong,{children:"Version:"})," 2.0."]})}),"\n",(0,t.jsx)(i.h2,{id:"introduction",children:"INTRODUCTION"}),"\n",(0,t.jsx)(i.h3,{id:"purpose-of-the-study",children:"Purpose of the Study"}),"\n",(0,t.jsx)(i.p,{children:"The purpose of this feasibility study is to evaluate the potential benefits and challenges of implementing OpenCTI within Redback Operations. OpenCTI, an open-source threat intelligence platform, offers capabilities that could enhance the cybersecurity posture of the organization. This study will explore how OpenCTI can be integrated into the existing infrastructure, particularly to support the various cybersecurity teams\u2014SecDevOps, GRC, Blue Team, Red Team, and Infrastructure Team\u2014who are engaged in both defensive and offensive operations."}),"\n",(0,t.jsx)(i.h3,{id:"background-information-on-opencti",children:"Background Information on OpenCTI"}),"\n",(0,t.jsx)(i.p,{children:"OpenCTI is designed to collect, organize, and visualize cyber threat information from multiple sources, providing a unified platform for managing and analyzing threat intelligence. It supports various formats, including STIX/TAXII, and offers API integration capabilities, making it a flexible tool for threat intelligence sharing and collaboration. Given Redback Operations\u2019 emphasis on cybersecurity, including monitoring and incident response activities, OpenCTI\u2019s features could significantly enhance the team\u2019s ability to detect and respond to threats."}),"\n",(0,t.jsx)(i.h2,{id:"objectives",children:"OBJECTIVES"}),"\n",(0,t.jsx)(i.h3,{id:"primary-goal",children:"Primary Goal"}),"\n",(0,t.jsx)(i.p,{children:"To determine whether OpenCTI can effectively support and enhance the threat intelligence capabilities of Redback Operations, aligning with the specific needs of ongoing projects and cybersecurity initiatives."}),"\n",(0,t.jsx)(i.h3,{id:"specific-objectives",children:"Specific Objectives"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Enhance Threat Visibility: Improve the organization\u2019s ability to detect and understand emerging cyber threats by consolidating threat data in a centralized platform."}),"\n",(0,t.jsx)(i.li,{children:"Improve Incident Response: Facilitate faster and more informed decision-making during incidents through real-time access to relevant threat intelligence."}),"\n",(0,t.jsx)(i.li,{children:"Support Collaboration: Enable seamless collaboration among different cybersecurity teams by providing a shared platform for threat data."}),"\n",(0,t.jsx)(i.li,{children:"Align with Organizational Growth: Ensure that OpenCTI can scale with Redback Operations as it takes on new projects and handles increasing volumes of threat data."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"functional-analysis",children:"FUNCTIONAL ANALYSIS"}),"\n",(0,t.jsx)(i.h3,{id:"overview-of-openctis-features",children:"Overview of OpenCTI\u2019s Features"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Data Aggregation: OpenCTI aggregates threat intelligence from multiple sources, including internal logs, external threat feeds, and manual inputs, into a unified database."}),"\n",(0,t.jsx)(i.li,{children:"Threat Visualization: The platform offers powerful visualization tools, including graphs and dashboards, to help users understand the relationships between different threats."}),"\n",(0,t.jsx)(i.li,{children:"Automated Sharing: OpenCTI can automate the sharing of threat intelligence across teams and systems, ensuring that all relevant parties have access to the latest information."}),"\n",(0,t.jsx)(i.li,{children:"Integration with Existing Tools: OpenCTI supports integration with other cybersecurity tools, such as SIEMs, through its API, allowing for automated data flow and response."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"comparison-with-organizational-requirements",children:"Comparison with Organizational Requirements"}),"\n",(0,t.jsx)(i.h3,{id:"cybersecurity-team-needs",children:"Cybersecurity Team Needs:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Blue Team"}),": Focused on defensive operations using tools like SIEM, Nagios, and Wazuh, OpenCTI could provide enhanced threat intelligence that integrates directly into these tools."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Red Team"}),": Engaged in penetration testing and vulnerability assessments, the Red Team could benefit from the latest threat intelligence to simulate real-world attack scenarios."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"SecDevOps"}),": Tasked with integrating and deploying security tools, the SecDevOps team could use OpenCTI to ensure that deployed systems are aligned with the latest threat landscapes."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"project-specific-needs",children:"Project-Specific Needs:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"VR SunCycle and Wearable Technology Projects: These projects may involve collecting and processing sensitive data, making them potential targets for cyber threats. OpenCTI can help in identifying and mitigating such risks by providing relevant threat intelligence."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"key-features-aligned-with-organizational-needs",children:"Key Features Aligned with Organizational Needs"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"API Integration: Essential for integrating OpenCTI with existing tools used by various teams."}),"\n",(0,t.jsx)(i.li,{children:"Real-Time Threat Sharing: Supports faster incident response, which is critical for both offensive and defensive cybersecurity teams."}),"\n",(0,t.jsx)(i.li,{children:"Scalability: Important to ensure that OpenCTI can grow alongside Redback Operations as it expands its project portfolio and cyber operations."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"technical-assessment",children:"TECHNICAL ASSESSMENT"}),"\n",(0,t.jsx)(i.h3,{id:"system-requirements",children:"System Requirements"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Existing Infrastructure: Redback Operations currently relies on virtual machines (VMs) provided through Deakin University\u2019s VPN and other remote resources. Therefore, the implementation of OpenCTI will need to leverage this existing infrastructure rather than deploying on traditional on-premises servers or cloud platforms."}),"\n",(0,t.jsx)(i.li,{children:"Software Dependencies: OpenCTI operates on Linux distributions and requires additional software such as PostgreSQL, Elasticsearch, and Redis. The technical team must assess whether these can be accommodated within the existing VM infrastructure."}),"\n",(0,t.jsx)(i.li,{children:"University\u2019s VPNcture: The network infrastructure, particularly the use of Deakin University\u2019s VPN, will need to support the secure and efficient operation of OpenCTI. This includes ensuring that data transfer between VMs and other integrated tools (like SIEM, Wazuh, and Nagios) is secure and dependable."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Existing Systems: OpenCTI must be compatible with the tools and systems currently in use within Redback Operations, which are primarily accessed through VMs. This includes ensuring that the VMs have the necessary resources and configurations to support the platform."}),"\n",(0,t.jsx)(i.li,{children:"Protocols: OpenCTI\u2019s support for industry-standard protocols such as STIX/TAXII is crucial for its integration with Redback\u2019s existing tools and external threat intelligence feeds."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"scalability",children:"Scalability"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Infrastructure Constraints: Given the reliance on VMs and the university\u2019s infrastructure, scalability will depend on the available resources within this environment. The feasibility of expanding the infrastructure (e.g., increasing the number of VMs or their resources) must be assessed."}),"\n",(0,t.jsx)(i.li,{children:"Organizational Growth: As Redback Operations grows and potentially takes on more complex cybersecurity projects, the infrastructure supporting OpenCTI must be flexible enough to scale accordingly. This could involve negotiating additional resources from the university or optimizing the use of existing VMs."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"deployment-considerations",children:"Deployment Considerations"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Leveraging Existing VMs: Rather than deploying on new on-premises or cloud infrastructure, OpenCTI can be deployed within the existing VM environment provided by Deakin University. This approach minimizes additional costs and complexity."}),"\n",(0,t.jsx)(i.li,{children:"Technical Challenges: Potential challenges include ensuring that VMs have sufficient resources to handle OpenCTI\u2019s requirements, managing data security across VMs, and maintaining performance within the constraints of the university-provided infrastructure."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"maintenance-and-support",children:"Maintenance and Support"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Ongoing Maintenance: Maintenance will involve managing OpenCTI within the VM environment, ensuring that software dependencies are kept up-to-date, and that performance remains optimal. The IT support team must be familiar with the VM environment and how to maintain OpenCTI within it."}),"\n",(0,t.jsx)(i.li,{children:"Technical Support: Given the open-source nature of OpenCTI, community support will be valuable, but in-house expertise will also be crucial for handling day-to-day operations and troubleshooting within the VM environment."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"security-and-compliance",children:"SECURITY AND COMPLIANCE"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Security Features: The security assessment will need to consider the protections provided by the university's VM environment and VPN. Focus on how OpenCTI's security features, such as encryption and access controls, can integrate with or enhance the existing security measures provided by the VMs."}),"\n",(0,t.jsx)(i.li,{children:"Compliance: Compliance considerations will be based on how OpenCTI operates within the VM environment. Ensure that the VM infrastructure meets relevant compliance standards (e.g., data residency, access control) and that OpenCTI\u2019s deployment will not introduce compliance risks."}),"\n",(0,t.jsx)(i.li,{children:"Data Privacy: Since the VMs and VPN are provided by Deakin University, data privacy measures must align with the university's policies. Assess how OpenCTI can maintain privacy and confidentiality within this shared infrastructure."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"integration-potential",children:"INTEGRATION POTENTIAL"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Compatibility with Existing Tools: The integration of OpenCTI with tools like SIEM, Wazuh, and Nagios will need to be tested within the existing VM environment. Focus on how data flows between these tools within the VMs and whether any performance or security issues arise."}),"\n",(0,t.jsx)(i.li,{children:"API Capabilities: The API integration will need to work within the constraints of the VM environment, including any limitations imposed by the university's network setup. Consider the feasibility of API calls across VMs and through the VPN."}),"\n",(0,t.jsx)(i.li,{children:"Interoperability: Ensure that OpenCTI\u2019s interoperability with other tools is fully functional within the VM environment, considering any potential restrictions or performance impacts imposed by the university\u2019s infrastructure."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"user-experience-and-training",children:"USER EXPERIENCE AND TRAINING"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Usability: Training programs should focus on how users can effectively operate OpenCTI within the VM environment. This includes managing the application within VMs and understanding any specific requirements related to the university\u2019s infrastructure."}),"\n",(0,t.jsx)(i.li,{children:"Training Requirements: The training must cover not only OpenCTI\u2019s functionalities but also the specifics of using it within the VM environment. This might include how to access OpenCTI via the VPN, manage resources within VMs, and troubleshoot common issues in this setup."}),"\n",(0,t.jsx)(i.li,{children:"Onboarding: Onboarding will need to include instructions on accessing and managing OpenCTI through the university\u2019s VM infrastructure, ensuring all users are comfortable with this environment."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"cost-benefit-analysis",children:"COST-BENEFIT ANALYSIS"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Initial Costs: The cost analysis will reflect savings from not requiring new on-premises hardware or cloud services. Instead, the focus will be on any costs associated with configuring and optimizing the existing VMs for OpenCTI."}),"\n",(0,t.jsx)(i.li,{children:"Ongoing Costs: Recurring costs might include additional VM resources if needed, but there will be no expenses related to maintaining physical hardware or cloud subscriptions."}),"\n",(0,t.jsx)(i.li,{children:"Benefits Analysis: The benefits will include leveraging existing infrastructure to minimize costs, while still gaining enhanced threat intelligence capabilities through OpenCTI. This approach could also improve ROI by avoiding the need for significant new investments in hardware or cloud services."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"risk-assessment",children:"RISK ASSESSMENT"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Technical Risks: Risks will center on the limitations of the existing VM environment, such as performance constraints, resource availability, and potential integration challenges. Mitigation strategies will focus on optimizing the VM environment for OpenCTI."}),"\n",(0,t.jsx)(i.li,{children:"Organizational Risks: Organizational readiness will include ensuring that all participants are comfortable working within the VM environment and that the necessary resources (both technical and human) are available to support OpenCTI in this context."}),"\n",(0,t.jsx)(i.li,{children:"Mitigation Strategies: Strategies will include ensuring sufficient VM resources are allocated, providing specialized training for managing OpenCTI within VMs, and working closely with the university\u2019s IT team to address any infrastructure limitations."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"alternative-solutions",children:"ALTERNATIVE SOLUTIONS"}),"\n",(0,t.jsx)(i.p,{children:"Evaluation of Alternatives:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"MISP (Malware Information Sharing Platform): MISP is an open-source platform like OpenCTI and should be evaluated for how well it can be integrated within the existing VM infrastructure. Given its flexibility, MISP could be a viable option if it aligns well with the current environment."}),"\n",(0,t.jsx)(i.li,{children:"ThreatConnect: A commercial platform with advanced features, ThreatConnect should be assessed for its compatibility with the VM environment. Consider whether it is more complex feature set justifies the cost and effort needed to deploy it in the existing infrastructure."}),"\n",(0,t.jsx)(i.li,{children:"Anomali: Another commercial solution, Anomali\u2019s suitability for deployment in the VM infrastructure must be considered. Its robust capabilities may offer significant advantages, but at a higher cost and potential complexity."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Comparison"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Features: The feature comparison remains unchanged, focusing on the capabilities of each platform."}),"\n",(0,t.jsx)(i.li,{children:"Cost: Acknowledge that the costs related to deploying these alternatives should now also factor in any challenges or benefits associated with the VM infrastructure."}),"\n",(0,t.jsx)(i.li,{children:"Suitability: Consider how well each alternative can be integrated into the VM environment, like the evaluation for OpenCTI."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"conclusion",children:"CONCLUSION"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Summary of Findings: The conclusion will reflect the suitability of OpenCTI for deployment within the existing VM environment. Emphasize that this approach maximizes the use of current resources while still providing the desired enhancements to threat intelligence capabilities."}),"\n",(0,t.jsx)(i.li,{children:"Recommendations: Recommend moving forward with OpenCTI, with an implementation plan that includes careful testing and optimization within the VM environment."}),"\n",(0,t.jsx)(i.li,{children:"Next Steps: The next steps will include working with the university\u2019s IT team to ensure the VMs are properly configured for OpenCTI and planning for a pilot phase to test the deployment in this environment."}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function r(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);