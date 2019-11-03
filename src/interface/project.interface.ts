
interface IProject {
    id?: number;
    name?: string;
    description?: string;
    webUrl?: string;
    avatarUrl?: string;
    gitSshUrl?: string;
    gitHttpUrl?: string;
    namespace?: string;
    visibilityLevel?: number;
    pathWithNamespace?: string;
    defaultBranch?: string;
    ciConfigPath?: null;
    homepage?: string;
    url?: string;
    sshUrl?: string;
    httpUrl?: string;
}

export default IProject;
