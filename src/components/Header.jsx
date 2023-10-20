function Header({wins, losses, title}) {

    return (
        <>
            <div class="row">
                <div class="col-4 score-card">
                    Total Wins: {wins}<br />
                    Total Losses: {losses}
                </div>
                <div class="col-4">
                    <h1 class="title">{title}</h1>
                </div>
                <div class="col-4"></div>
            </div>
        </>
    );

}

export default Header;