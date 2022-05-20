declare module '*.module.less' {
  const rules: { [selector: string]: string };
  export = rules;
}
