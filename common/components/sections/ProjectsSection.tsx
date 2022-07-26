import { useState } from 'react';
import { classNames } from '../../scripts/tailwind';
import Container from '../layout/Container';

type TabType = {
    name: string;
};

const tabs: TabType[] = [
    { name: 'All' },
    { name: 'React' },
    { name: 'Vue' },
    { name: 'Dotnet' },
    { name: 'Python' },
    { name: 'Unity' },
];

const ProjectsSection = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <Container className="pt-8 pb-24">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                Projects
            </h2>
            <div>
                <div className="sm:hidden">
                    <label htmlFor="tabs" className="sr-only">
                        Select a tab
                    </label>
                    {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                    <select
                        id="tabs"
                        name="tabs"
                        className="block w-full focus:ring-secondary-normal focus:border-secondary-normal border-gray-300 rounded-md"
                        defaultValue={
                            tabs.find((_, i) => i === activeTab)?.name ??
                            tabs[0].name
                        }
                    >
                        {tabs.map((tab) => (
                            <option key={tab.name}>{tab.name}</option>
                        ))}
                    </select>
                </div>
                <div className="hidden sm:block mt-5">
                    <nav
                        className="flex gap-x-4 flex-wrap gap-y-4 justify-start"
                        aria-label="Tabs"
                    >
                        {tabs.map((tab, idx) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(idx)}
                                className={classNames(
                                    idx === activeTab
                                        ? 'bg-secondary-normal/30 text-secondary-light'
                                        : 'text-gray-500 hover:text-gray-700',
                                    'px-3 py-2 font-medium text-sm rounded-md'
                                )}
                                aria-current={
                                    idx === activeTab ? 'page' : undefined
                                }
                            >
                                {tab.name}
                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </Container>
    );
};

export default ProjectsSection;
