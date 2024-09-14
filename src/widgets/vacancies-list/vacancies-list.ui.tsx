import { useVacanciesList } from '@/widgets/vacancies-list'
import { VacancyCard } from '@/entiites/vacancy'

export function VacanciesList() {
    const rawData = {
        vacancies: [
            {
                id: '1',
                title: 'Senior Software Engineer',
                company: 'TechCorp',
                location: 'San Francisco, CA',
                type: 'Full-time',
                salaryRange: {
                    min: 130000,
                    max: 180000,
                },
                views: 1250,
                skills: ['JavaScript', 'React', 'Node.js'],
                postedDate: '2024-09-01',
            },
            {
                id: '2',
                title: 'Marketing Manager',
                company: 'BrandBoost',
                location: 'New York, NY',
                type: 'Full-time',
                salaryRange: {
                    min: 90000,
                    max: 120000,
                },
                views: 890,
                skills: ['Digital Marketing', 'SEO', 'Social Media'],
                postedDate: '2024-09-03',
            },
            {
                id: '3',
                title: 'Data Scientist',
                company: 'DataDriven',
                location: 'Remote',
                type: 'Contract',
                salaryRange: {
                    min: 110000,
                    max: 150000,
                },
                views: 750,
                skills: ['Python', 'Machine Learning', 'SQL'],
                postedDate: '2024-09-05',
            },
            {
                id: '4',
                title: 'UX Designer',
                company: 'DesignPro',
                location: 'London, UK',
                type: 'Part-time',
                salaryRange: {
                    min: 45000,
                    max: 60000,
                },
                views: 620,
                skills: ['Figma', 'User Research', 'Prototyping'],
                postedDate: '2024-09-07',
            },
            {
                id: '5',
                title: 'Financial Analyst',
                company: 'MoneyMatters',
                location: 'Chicago, IL',
                type: 'Full-time',
                salaryRange: {
                    min: 75000,
                    max: 95000,
                },
                views: 480,
                skills: ['Financial Modeling', 'Excel', 'PowerBI'],
                postedDate: '2024-09-09',
            },
            {
                id: '6',
                title: 'Customer Support Specialist',
                company: 'HappyClients',
                location: 'Austin, TX',
                type: 'Full-time',
                salaryRange: {
                    min: 45000,
                    max: 65000,
                },
                views: 320,
                skills: ['Communication', 'Problem Solving', 'CRM Software'],
                postedDate: '2024-09-11',
            },
            {
                id: '7',
                title: 'Product Manager',
                company: 'InnovateTech',
                location: 'Seattle, WA',
                type: 'Full-time',
                salaryRange: {
                    min: 110000,
                    max: 150000,
                },
                views: 980,
                skills: ['Agile', 'Product Strategy', 'User Stories'],
                postedDate: '2024-09-13',
            },
            {
                id: '8',
                title: 'DevOps Engineer',
                company: 'CloudSolutions',
                location: 'Remote',
                type: 'Full-time',
                salaryRange: {
                    min: 120000,
                    max: 160000,
                },
                views: 710,
                skills: ['AWS', 'Docker', 'Kubernetes'],
                postedDate: '2024-09-15',
            },
            {
                id: '9',
                title: 'Content Writer',
                company: 'WordSmith',
                location: 'Toronto, Canada',
                type: 'Freelance',
                salaryRange: null,
                views: 290,
                skills: ['Copywriting', 'SEO', 'Content Strategy'],
                postedDate: '2024-09-17',
            },
            {
                id: '10',
                title: 'HR Manager',
                company: 'PeopleFirst',
                location: 'Boston, MA',
                type: 'Full-time',
                salaryRange: {
                    min: 85000,
                    max: 110000,
                },
                views: 540,
                skills: ['Recruiting', 'Employee Relations', 'HR Software'],
                postedDate: '2024-09-19',
            },
            {
                id: '11',
                title: 'Business Analyst',
                company: 'StrategyPlus',
                location: 'Dallas, TX',
                type: 'Full-time',
                salaryRange: {
                    min: 70000,
                    max: 95000,
                },
                views: 420,
                skills: ['Data Analysis', 'Business Process Modeling', 'SQL'],
                postedDate: '2024-09-21',
            },
            {
                id: '12',
                title: 'Graphic Designer',
                company: 'CreativeCo',
                location: 'Los Angeles, CA',
                type: 'Full-time',
                salaryRange: {
                    min: 60000,
                    max: 85000,
                },
                views: 380,
                skills: ['Adobe Creative Suite', 'Typography', 'Branding'],
                postedDate: '2024-09-23',
            },
            {
                id: '13',
                title: 'Sales Representative',
                company: 'SalesForce',
                location: 'Miami, FL',
                type: 'Full-time',
                salaryRange: {
                    min: 50000,
                    max: 80000,
                },
                views: 290,
                skills: ['Negotiation', 'CRM', 'Cold Calling'],
                postedDate: '2024-09-25',
            },
            {
                id: '14',
                title: 'Network Administrator',
                company: 'TechSupport',
                location: 'Phoenix, AZ',
                type: 'Full-time',
                salaryRange: {
                    min: 75000,
                    max: 100000,
                },
                views: 310,
                skills: ['Network Security', 'Cisco', 'Troubleshooting'],
                postedDate: '2024-09-27',
            },
            {
                id: '15',
                title: 'Content Marketing Specialist',
                company: 'ContentKing',
                location: 'Remote',
                type: 'Full-time',
                salaryRange: {
                    min: 55000,
                    max: 75000,
                },
                views: 280,
                skills: ['Content Strategy', 'SEO', 'Social Media Management'],
                postedDate: '2024-09-29',
            },
            {
                id: '16',
                title: 'Project Manager',
                company: 'BuildItRight',
                location: 'Denver, CO',
                type: 'Full-time',
                salaryRange: {
                    min: 90000,
                    max: 120000,
                },
                views: 520,
                skills: ['Project Planning', 'Team Management', 'Budgeting'],
                postedDate: '2024-10-01',
            },
            {
                id: '17',
                title: 'Mobile App Developer',
                company: 'AppWizards',
                location: 'Austin, TX',
                type: 'Full-time',
                salaryRange: {
                    min: 100000,
                    max: 140000,
                },
                views: 670,
                skills: ['iOS', 'Android', 'React Native'],
                postedDate: '2024-10-03',
            },
            {
                id: '18',
                title: 'Accountant',
                company: 'NumberCrunchers',
                location: 'Chicago, IL',
                type: 'Full-time',
                salaryRange: {
                    min: 65000,
                    max: 85000,
                },
                views: 230,
                skills: [
                    'Bookkeeping',
                    'Tax Preparation',
                    'Financial Reporting',
                ],
                postedDate: '2024-10-05',
            },
            {
                id: '19',
                title: 'Customer Success Manager',
                company: 'SaaSify',
                location: 'San Diego, CA',
                type: 'Full-time',
                salaryRange: {
                    min: 70000,
                    max: 95000,
                },
                views: 410,
                skills: ['Account Management', 'SaaS', 'Customer Retention'],
                postedDate: '2024-10-07',
            },
            {
                id: '20',
                title: 'Data Analyst',
                company: 'InsightfulData',
                location: 'Remote',
                type: 'Full-time',
                salaryRange: {
                    min: 65000,
                    max: 90000,
                },
                views: 580,
                skills: ['SQL', 'Python', 'Data Visualization'],
                postedDate: '2024-10-09',
            },
            {
                id: '21',
                title: 'Social Media Manager',
                company: 'ViralConnect',
                location: 'New York, NY',
                type: 'Full-time',
                salaryRange: {
                    min: 55000,
                    max: 75000,
                },
                views: 340,
                skills: [
                    'Social Media Platforms',
                    'Content Creation',
                    'Analytics',
                ],
                postedDate: '2024-10-11',
            },
            {
                id: '22',
                title: 'Systems Analyst',
                company: 'TechSolutions',
                location: 'Houston, TX',
                type: 'Full-time',
                salaryRange: {
                    min: 80000,
                    max: 110000,
                },
                views: 290,
                skills: [
                    'Systems Analysis',
                    'Business Process Improvement',
                    'IT Infrastructure',
                ],
                postedDate: '2024-10-13',
            },
            {
                id: '23',
                title: 'Technical Writer',
                company: 'DocuMasters',
                location: 'Seattle, WA',
                type: 'Full-time',
                salaryRange: {
                    min: 70000,
                    max: 95000,
                },
                views: 180,
                skills: [
                    'Technical Documentation',
                    'Information Architecture',
                    'API Documentation',
                ],
                postedDate: '2024-10-15',
            },
            {
                id: '24',
                title: 'Operations Manager',
                company: 'EfficiencyPro',
                location: 'Atlanta, GA',
                type: 'Full-time',
                salaryRange: {
                    min: 85000,
                    max: 120000,
                },
                views: 260,
                skills: [
                    'Process Optimization',
                    'Team Leadership',
                    'Supply Chain Management',
                ],
                postedDate: '2024-10-17',
            },
            {
                id: '25',
                title: 'Frontend Developer',
                company: 'WebWizards',
                location: 'Remote',
                type: 'Full-time',
                salaryRange: {
                    min: 90000,
                    max: 130000,
                },
                views: 720,
                skills: ['React', 'Vue.js', 'CSS3'],
                postedDate: '2024-10-19',
            },
            {
                id: '26',
                title: 'Quality Assurance Tester',
                company: 'BugBusters',
                location: 'Boston, MA',
                type: 'Full-time',
                salaryRange: {
                    min: 65000,
                    max: 90000,
                },
                views: 240,
                skills: ['Test Planning', 'Automated Testing', 'Bug Tracking'],
                postedDate: '2024-10-21',
            },
            {
                id: '27',
                title: 'Public Relations Specialist',
                company: 'MediaMasters',
                location: 'Washington, D.C.',
                type: 'Full-time',
                salaryRange: {
                    min: 60000,
                    max: 85000,
                },
                views: 190,
                skills: [
                    'Media Relations',
                    'Crisis Management',
                    'Press Release Writing',
                ],
                postedDate: '2024-10-23',
            },
            {
                id: '28',
                title: 'Cybersecurity Analyst',
                company: 'SecureNet',
                location: 'Remote',
                type: 'Full-time',
                salaryRange: {
                    min: 95000,
                    max: 135000,
                },
                views: 480,
                skills: [
                    'Network Security',
                    'Threat Analysis',
                    'Incident Response',
                ],
                postedDate: '2024-10-25',
            },
            {
                id: '29',
                title: 'E-commerce Manager',
                company: 'DigitalRetail',
                location: 'Portland, OR',
                type: 'Full-time',
                salaryRange: {
                    min: 75000,
                    max: 105000,
                },
                views: 320,
                skills: [
                    'E-commerce Platforms',
                    'Digital Marketing',
                    'Inventory Management',
                ],
                postedDate: '2024-10-27',
            },
            {
                id: '30',
                title: 'Machine Learning Engineer',
                company: 'AIInnovate',
                location: 'San Jose, CA',
                type: 'Full-time',
                salaryRange: {
                    min: 120000,
                    max: 180000,
                },
                views: 850,
                skills: [
                    'TensorFlow',
                    'PyTorch',
                    'Natural Language Processing',
                ],
                postedDate: '2024-10-29',
            },
        ],
    }
    const { data } = useVacanciesList() || rawData.vacancies
    return (
        <div className="flex flex-wrap gap-5">
            {data?.map((vacancy) => (
                <VacancyCard vacancy={vacancy} key={vacancy.id} />
            ))}
        </div>
    )
}
