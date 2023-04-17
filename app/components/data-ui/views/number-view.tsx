import { ViewComponent } from "./types";

export const NumberView: ViewComponent<number> = ({ data }) => {
    return <div className="bg-teal-900 p-4 flex justify-center">{data}</div>;
};
