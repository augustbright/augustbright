import { Section } from "@/app/components/data-ui/structure-components/section"
import { StackExample } from "./stack-example";
import { FloatArea } from "@/app/components/data-ui/structure-components/float-area";

export default function UI() {
    return (
        <FloatArea>
            <main className="flex flex-col">
                <header className="mb-8">
                    <h1 className="mt-2 text-gray-400 text-2xl">
                        DATA UI
                    </h1>
                </header>
                <Section title="Stack" description="Components and controllers representing stack data structures">
                    <StackExample />
                </Section>
            </main>
        </FloatArea>
    );
}