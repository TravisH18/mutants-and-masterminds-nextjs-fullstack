
import { notFound } from 'next/navigation';
import prisma from '@/app/lib/prisma';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';

export default async function ViewCharacterPage({
    searchParams,
}: {
    searchParams: { id: string };
}) {
    const id = searchParams.id;
    const character = await prisma.character.findUnique({
        where: {
            id: String(id)
        }
    })

    if (!character) {
        notFound();
    }

    return (
        // TODO use character sheet componenet here
        // TODO tabbed component with the different parts of the sheet as tabs
        // TODO add button for full character sheet option to switch between tab view a full view
        <div className="p-6">
            <Tabs>
                <TabList>
                    <Tab>Background</Tab>
                    <Tab>Powers</Tab>
                    <Tab>Gadgets</Tab>
                    <Tab>Abilities</Tab>
                    <Tab>Skills</Tab>
                    <Tab>Notes</Tab>
                </TabList>
                <TabPanel>
                    Background Tab 
                </TabPanel>
                <TabPanel>
                    Powers Tab 
                </TabPanel>
                <TabPanel>
                    Gadgets Tab
                </TabPanel>
                <TabPanel>
                    Abilities Tab
                </TabPanel>
                <TabPanel>
                    Skills Tab
                </TabPanel>
                <TabPanel>
                    Notes Tab
                </TabPanel>
            </Tabs>
        </div>
    );
}