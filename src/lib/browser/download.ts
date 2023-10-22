const download = (data?: Blob | MediaSource | string, fileName?: string | null) => {
    if (data) {
        let url
        if (typeof data === 'string') {
            url = data
        } else {
            url = window.URL.createObjectURL(data)
        }
        const a = document.createElement('a')
        a.href = url
        a.target = '_blank'
        a.download = fileName || 'excel_list'
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
    }
}

export { download }