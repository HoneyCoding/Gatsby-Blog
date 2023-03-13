const dateToKoreanFormat = (date) => {
    const postDateOptions = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    }

    const postDate = new Date(date).toLocaleString("ko-KR", postDateOptions);

    return postDate;
}

export default dateToKoreanFormat;