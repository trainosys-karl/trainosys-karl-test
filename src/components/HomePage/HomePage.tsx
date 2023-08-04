const HomePage: React.FC = () => {
    return(
        <div className="home-page">
            <div className="home-header">
                <h1>Candidate Home</h1>
                <span>Welcome to EGIS. Delivering the best talent, faster with hiring intelligence</span>
            </div>

            <div className="home-task">
                <h2>My Task</h2>
                <span>Your Practically UI/UX live assignment is schecduled on 23rd March 2022</span>
                <div>
                <button type="button" className="btn btn-success">View Details</button>
                </div>
            </div>

            <div className="home-welcome">
                <div>
                    <h2>Welcome!</h2>
                    <span> You can check back here anytime to monitor the status of your application and recieve important updates and reminders on pending action items</span>
                </div>     
                <div>
                    <h2>About</h2>
                    <span>Egis is an international player active in the consulting, construction engineering and mobility service sectors. We design and operate intelligent infrastructure and buildings capable of responding to the climate emergency and helping to achieve more balanced, sustainable and resilient territorial development.</span>
                </div>
            </div>

            <div className="home-submitted">
                <h2>Submitted Application</h2>
                <table className="table">
                    <colgroup>
                        <col style={{width: '50%%'}}/>
                        <col style={{width: '25%'}}/>
                        <col style={{width: '25%'}}/>

                    </colgroup>
                    <thead>
                        <tr>
                        <th scope="col">Job</th>
                        <th scope="col" style={{textAlign:'center'}}>Stage</th>
                        <th scope="col" style={{textAlign:'center'}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>SAP S4 HANA - UX Designer</td>
                        <td style={{textAlign:'center'}}>Assessment I</td>
                        <td style={{textAlign:'center'}}>
                        <div className="btn-group">
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Manage
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">View Application</a></li>
                                <li><a className="dropdown-item" href="#">View Status Bar</a></li>
                                <li><a className="dropdown-item" href="#">Withdraw Application</a></li>
                            </ul>
                        </div>
                        </td>
                        </tr>
                        <tr>
                        <td>Hitachi - Visual Designer</td>
                        <td style={{textAlign:'center'}}>Interview</td>
                        <td style={{textAlign:'center'}}>
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Manage
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">View Application</a></li>
                                <li><a className="dropdown-item" href="#">View Status Bar</a></li>
                                <li><a className="dropdown-item" href="#">Withdraw Application</a></li>
                            </ul>
                        </td>
                        </tr>
                        <tr>
                        <td>Practically - UI/UX Designer</td>
                        <td style={{textAlign:'center'}} >Assessment II</td>
                        <td style={{textAlign:'center'}}>
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Manage
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">View Application</a></li>
                                <li><a className="dropdown-item" href="#">View Status Bar</a></li>
                                <li><a className="dropdown-item" href="#">Withdraw Application</a></li>
                            </ul>
                        </td>
                        </tr>
                        <tr>
                        <td>Infosys - UX Designer</td>
                        <td style={{textAlign:'center'}}>Assessment II</td>
                        <td style={{textAlign:'center'}}>
                            <button type="button" className="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                Manage
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">View Application</a></li>
                                <li><a className="dropdown-item" href="#">View Status Bar</a></li>
                                <li><a className="dropdown-item" href="#">Withdraw Application</a></li>
                            </ul>
                        </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default HomePage;

