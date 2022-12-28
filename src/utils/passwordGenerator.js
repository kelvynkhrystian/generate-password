const passwordGenerator = () => {
    const senha = Math.random().toString(36).slice(-10);
    return senha
}

export default passwordGenerator;
