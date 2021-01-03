import * as React from "react";
import { Layout } from "./layouts/layout";
import { Conversation } from "./scenes/Conversation";

export const Main = React.memo(() => {
    return <Layout>
        <Conversation />
    </Layout>
})