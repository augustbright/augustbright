import { ExperimentLink } from "./experiment-link";

export const ExperimentsList = () => {
    return (
        <div className="flex flex-col w-48">
            <ExperimentLink title="DATA UI" description="A place to experiment with different elements of UI, components, layouts, etc" href="/experiments/data-ui" />
        </div>
    );
}