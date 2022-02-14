import Header from './Header'
import List from './List';
import Footer from './Footer'

function Todo(){
    return (
        <>
        <section className="todoapp">
            <Header />
            <List />
        </section>
        <Footer />
        </>
    );
}


export default Todo