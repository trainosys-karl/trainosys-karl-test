import { Link, Outlet} from 'react-router-dom'

const RootPage: React.FC = () => {
    return (
        <header>
            <div>
                <p>
                    <Link to="/home"></Link></p>
                <p>
                    <Link to="/calendar"></Link></p>
                <p>
                    <Link to="/status"></Link></p>
                <p>
                    <Link to="/main"></Link></p>
            </div>
            <main>
                <Outlet/>
            </main>
        </header>
    );
};

export default RootPage;