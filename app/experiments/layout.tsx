import { ExperimentsList } from "./navigation/experiments-list";

export default function ExperimentsLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex grow">
            <aside className="border-r border-slate-600">
                <ExperimentsList />
            </aside>
            <div className="grow px-2 flex flex-col">
                {children}
            </div>
        </div>
    )
}