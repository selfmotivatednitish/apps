
import React, { useState } from 'react'
import { Button, Stack } from 'react-bootstrap'

export default function TitlePage() {

    const [home, setHome] = useState(true)
    const [lang, setLang] = useState(false)
    const [langValue, setLangValue] = useState("")
    const [form, setForm] = useState(false)
    const [upload, setUpload] = useState(false)
    const [result, setResult] = useState(false)

    const homeClickHanlder = () => {
        setHome(false)
        setLang(true)
    }

    const onClickHindi = () => {
        setLang(false)
        setLangValue("hindi")
    }

    const onClickEng = () => {
        setLang(false)
        setLangValue("english")
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#c2d6c2', fontFamily: 'Arial, sans-serif' }} >
            <div onClick={homeClickHanlder} style={{ display: home ? 'block' : 'none', padding: '20px', cursor: "pointer", backgroundColor: 'white', textAlign: 'center', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', fontSize: '24px', fontWeight: 'bold' }} >
                Welcome to Crop disease prediction system
            </div>
            <div onClick={homeClickHanlder} style={{ display: lang ? 'block' : 'none', padding: '20px', cursor: "pointer", backgroundColor: 'white', textAlign: 'center', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', fontSize: '24px', fontWeight: 'bold' }} >
                Choose Language
                <Stack direction="horizontal" gap={4}>
                    <Button onClick={() => onClickHindi} variant="primary">
                        हिंदी
                    </Button>
                    <Button onClick={onClickEng} variant="success">
                        English
                    </Button>
                </Stack>
            </div>
        </div>
    )
}
