import { PluginItem } from '@babel/core';

export default function (): PluginItem {
    return {
        visitor: {
            Program(path, state) {
                const removeProps = state.opts.props || [];
                // traverse - обход узлов узла
                path.traverse({
                    JSXIdentifier(current) {
                        const nodeName = current.node.name;

                        if (removeProps.includes(nodeName)) {
                            current.parentPath.remove();
                        }
                    },
                });
            },
        },
    };
}
