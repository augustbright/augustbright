'use client';

import { NumberController } from "@/app/components/data-ui/controller-components/number-controller";
import { StackController } from "@/app/components/data-ui/controller-components/stack-controller";
import { Stack } from "@/app/components/data-ui/models/stack";
import { ViewControl } from "@/app/components/data-ui/structure-components/view-control";
import { NumberView } from "@/app/components/data-ui/views/number-view";
import { StackView } from "@/app/components/data-ui/views/stack-view";
import { useRef } from "react";

export const StackExample = () => {
    const stack = useRef(new Stack<number>([10, 20, 30]));
    return (
        <ViewControl renderControl={() => (
            <StackController stack={stack.current} itemController={NumberController} />
        )}>
            <StackView stack={stack.current} itemView={NumberView} />
        </ViewControl>
    );
}