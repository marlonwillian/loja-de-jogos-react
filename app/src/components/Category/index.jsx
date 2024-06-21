import styles from "./Category.module.css";


function Category({ title, children, index }) {
    return (
        <section className={styles.category} >
            <h2
                style={{
                    borderTop: index == 0 ? "" : "0.5px solid #ffffff5a"
                }}
            >
                <span
                    className={styles.line}
                >.
                </span>
                {title}
            </h2>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Category;