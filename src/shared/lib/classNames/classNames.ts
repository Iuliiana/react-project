type Mods = Record<string, string | boolean>;

export const classNames = (cls: string, mods: Mods, additional: string[]) => {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([name, value]) => Boolean(value))
            .map(([name, value]) => name)
    ]
        .join(' ');
}