const copyText = (text: string, onSuccess?: () => void) => {
    window.navigator.clipboard.writeText(text)
        .then(() => {
            onSuccess?.()
        })
}

export {copyText}