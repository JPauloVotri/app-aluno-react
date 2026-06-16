function SidedPage({ children }) {
  return <div className="container">
    <aside>
      <p>
        Educação não é aprendizado de fatos, mas o treinamento da mente para pensar.
        <span>Albert Einstein</span>
      </p>
    </aside>

    <main>
      <div className="cadastro">
        {children}
      </div>
    </main>
  </div>
}

export default SidedPage;