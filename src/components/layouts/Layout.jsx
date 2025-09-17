export default function Layout(props) {
    console.log(props)
    const { children } = props


    return (
        <>
            <header>
                <h1 className="text-gradient">Copacetic</h1>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <small>Created by</small>
                <a target="_blank" href="https://github.com/MaxoGitAcc">
                    <img src="https://avatars.githubusercontent.com/u/223145340?s=400&u=a339e478dc339741b4941ddeae489ad6c0063e3e&v=4" alt="pfp" />
                    <p>@MaxoGitAcc</p>
                    <i className="fa-brands fa-github"></i>
                </a>
            </footer>
        </>
    )
}