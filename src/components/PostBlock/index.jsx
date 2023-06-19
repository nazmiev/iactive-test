import styles from "./PostBlock.module.scss"

const PostBlock = ({ id, content, author, attachments, channel, date, region, senderNumber }) => {

    return (
        <div className={styles.root}>
            <p>id: {id}</p>
            <p>content: {content}</p>
            <p>author: {author}</p>
            {attachments.length && (
                <div className={styles.attachments}>
                    {attachments.map((attachment, index) => (
                        <div key={index}>
                            {attachment.type == 'image'
                            ? (<img src={attachment.url}/>)
                            : (<video>
                                <source src={attachment.url} />
                                </video>
                                )}
                        </div>
                    ))}
                </div>
            )}
            <p>channel: {channel}</p>
            <p>date: {date}</p>
            <p>region: {region}</p>
            <p>senderNumber: {senderNumber}</p>
        </div>
    )
}

export default PostBlock