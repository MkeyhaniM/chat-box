import React from "react";

import {ManageDeshboard} from "@/src/components";

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <section className="flex w-full justify-between gap-x-12">
      <div className="w-2/12">
        <ManageDeshboard />
      </div>
      <div className="w-10/12">{children}</div>
    </section>
  );
};

export default layout;
