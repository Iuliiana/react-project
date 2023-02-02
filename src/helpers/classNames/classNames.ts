type Mods = Record<string, string | boolean>;

export const classNames = (className: string, mods: Mods, additional: string[]) => {
    return [
        className,
        ...additional,
        ...Object.entries(mods)
            .filter(([name, value]) => value === true)
            .map(([name, value]) => name)
    ]
        .join(' ');
}