import { defineConfig } from 'vitepress'
export default defineConfig({
 title: 'AI Career Atlas',
 description: 'Find your place in the changing world of AI work. Research-backed role profiles, skills, and learning paths.',
 base: '/ai-career-atlas/',
 cleanUrls: false,
 lastUpdated: true,
 themeConfig: {
  logo: '/compass.svg',
  nav: [{ text: 'Explore roles', link: '/roles/' }, { text: 'Compare', link: '/compare' }, { text: 'Learning paths', link: '/learning-paths' }, { text: 'Research', link: '/research' }],
  sidebar: [{text:'Start here',items:[{text:'Role directory',link:'/roles/'},{text:'Compare careers',link:'/compare'},{text:'Learning paths',link:'/learning-paths'}]},{text:'Role profiles',items:[{"text": "Forward Deployed Engineer", "link": "/roles/forward-deployed-engineer"}, {"text": "Applied AI Engineer", "link": "/roles/applied-ai-engineer"}, {"text": "Applied AI Architect", "link": "/roles/ai-architect"}, {"text": "AI Evaluation Engineer", "link": "/roles/evaluation-engineer"}, {"text": "AI Research Engineer", "link": "/roles/research-engineer"}, {"text": "AI Deployment Manager", "link": "/roles/ai-deployment-manager"}]},{text:'Evidence & contribution',items:[{text:'Research & sources',link:'/research'},{text:'Contribute',link:'/contributing'}]}],
  search: { provider: 'local' },
  socialLinks: [{ icon: 'github', link: 'https://github.com/seafelsayed/ai-career-atlas' }],
  editLink: { pattern: 'https://github.com/seafelsayed/ai-career-atlas/edit/main/docs/:path' },
  footer: { message: 'An independent field guide. Titles evolve; evidence matters.', copyright: 'AI Career Atlas · Research reviewed November 5, 2026' }
 }
})
