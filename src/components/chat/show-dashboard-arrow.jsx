function ShowDashboardArrow({handleShowDashboard, showDashboard}) {
    return (
    <div className="arrow">
                    <button onClick={handleShowDashboard}>
            <i className={`bi ${showDashboard ? "bi-arrow-left" : "bi-arrow-right"}`}></i>
        </button>
    </div>);
}

export default ShowDashboardArrow