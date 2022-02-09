//Wildfire
import cover from '../assets/img/WFChart.png'
import home from '../assets/img/wildfire/impact-home.png'
import homeChart from '../assets/img/wildfire/home-chart.png'
import blocks from '../assets/img/wildfire/block2.png'

//Fraud mgm
import agents from '../assets/img/fraudMgm/Agents.png'
import analytics from '../assets/img/fraudMgm/analytics.png'
import caseDetail from '../assets/img/fraudMgm/caseDetail.png'
import dashboard from '../assets/img/fraudMgm/dashboard.png'
import caseList from '../assets/img/fraudMgm/caseList.png'

//contact tracing
import covidVid from '../assets/video/covid_mockup.mp4'
import covidCover from '../assets/img/contactTracing/covidCover.png'

//iframes
import treeFlame from '../assets/img/tree-flame.png'
import carouselCover from '../assets/img/carousel-block.png'


const projectData = [
    {
        id: 0,
        title: 'Wildfire.org',
        content: {
            type: 'image',
            cover: home,
        },
        intro: "Wildfires.org is a website (in design and development phase) for a fire-tech startup that aims to mitigate the mega-fire crisis in US by visualizing the true impact of wildfires and understanding our progress of fuel treatment",
        slides: [
            {image: home, text: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: homeChart, text: '2. skldfjgh;esrhfg;jkf;jalsrh;gfjhsd;jkfb;jgshdred et. Ac n At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: cover, text: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: blocks, text: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
        ]
    },
    {
        id: 1,
        title: '3D Object',
        content: {
            type:'iframe',
            class: 'spline',
            cover: treeFlame,
            src: 'https://my.spline.design/tree1-5982d22f322ef6c7b085c67988eb7d7f/',
        },
        intro: "An experimental attempt to visualize wildfire impact and treatment methods through 3D models",
        cover: cover,
        slides: null
    },
    {
        id: 2,
        title: 'Card Animation',
        content: {
            type: 'iframe',
            class: 'codePen',
            cover: carouselCover,
            src: "https://codepen.io/shawn_chi/embed/OJxGeVO?default-tab=&theme-id=dark",
            link: "https://retool.com/startups/#playbooks",
        },
        intro: "An animation for a card flipping interaction. Designed by Ettrics and was handed off to me for development. Finalized by Retool's internal engineers. ",
        slides: null
    },
    {
        id: 3,
        title: 'Fraud Management App',
        content: {
            type: 'image',
            cover: agents,
        },
        intro: "A design project for Fico's fraud protection program. This is a B2B enterprise application aimed for managerial employees at banking industries.",
        slides: [
            {image: dashboard, text: '1. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: agents, text: '2. skldfjgh;esrhfg;jkf;jalsrh;gfjhsd;jkfb;jgshdred et. Ac n At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: caseList, text: '3. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: caseDetail, text: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
            {image: analytics, text: '4. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus aliquam faucibus aliquam, nulla adipiscing sed et. Ac nisi lectus egestas eu molestie eu faucibus sit. At urna, mauris, leo turpis at velit eleifend. In tellus ultricies dui lorem vestibulum aliquam justo, congue. Erat habitant cum turpis faucibus est. Pulvinar tempor ultricies pellentesque erat pretium sed proin massa.'},
        ]
    },
    {
        id: 4,
        title: 'Contract Tracing App',
        content: {
            type: 'video',
            cover: covidCover,
            src: covidVid,
        },
        intro: "A conceptual app created early in the 2020 in light of the COVID pandemic. Perhaps not very practical but a good design practice for me.",
    },
]

export default projectData