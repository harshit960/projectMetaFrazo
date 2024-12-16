import React, { useState, useEffect, useRef } from 'react';
import SportsTranslation from './SportsTranslation';

// const DEEPL_API_KEY = process.env.NEXT_PUBLIC_DEEPL_API_KEY;
// const DEEPGRAM_API_KEY = process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY;

export function TranslationApp() {
  const [isRecording, setIsRecording] = useState(false);
  const [roomCode, setRoomCode] = useState("SPORT123");
  const [selectedMode, setSelectedMode] = useState("speaker");
  const [sourceLanguage, setSourceLanguage] = useState("en");
  const [targetLanguage, setTargetLanguage] = useState("es");
  const [delay, setDelay] = useState(30);
  const [transcription, setTranscription] = useState("");
  const [translation, setTranslation] = useState("");

  const microphoneRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  useEffect(() => {
    if (isRecording) {
      startRecording();
    } else {
      stopRecording();
    }
  }, [isRecording]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      microphoneRef.current = stream;
      mediaRecorderRef.current = new MediaRecorder(stream);
      
      mediaRecorderRef.current.ondataavailable = async (event) => {
        if (event.data.size > 0) {
          const audioBlob = new Blob([event.data], { type: 'audio/webm' });
          await transcribeAudio(audioBlob);
        }
      };

      mediaRecorderRef.current.start(1000); // Collect data every second
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
    }
    if (microphoneRef.current) {
      microphoneRef.current.getTracks().forEach(track => track.stop());
    }
  };

  const transcribeAudio = async (audioBlob) => {
    try {
      const response = await fetch('https://api.deepgram.com/v1/listen', {
        method: 'POST',
        headers: {
          'Authorization': `Token ${DEEPGRAM_API_KEY}`,
          'Content-Type': 'audio/webm',
        },
        body: audioBlob,
      });
      
      const data = await response.json();
      if (data.results?.channels?.[0]?.alternatives?.[0]?.transcript) {
        const newTranscription = data.results.channels[0].alternatives[0].transcript;
        setTranscription(prevTranscription => prevTranscription + " " + newTranscription);
        await translateText(newTranscription);
      }
    } catch (error) {
      console.error('Error transcribing audio:', error);
    }
  };

  const translateText = async (text) => {
    try {
      const response = await fetch('https://api-free.deepl.com/v2/translate', {
        method: 'POST',
        headers: {
          'Authorization': `DeepL-Auth-Key ${DEEPL_API_KEY}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          text: text,
          source_lang: sourceLanguage.toUpperCase(),
          target_lang: targetLanguage.toUpperCase(),
        }),
      });
      
      const data = await response.json();
      if (data.translations?.[0]?.text) {
        setTranslation(prevTranslation => prevTranslation + " " + data.translations[0].text);
      }
    } catch (error) {
      console.error('Error translating text:', error);
    }
  };

  return (
    <SportsTranslation
      isRecording={isRecording}
      setIsRecording={setIsRecording}
      roomCode={roomCode}
      selectedMode={selectedMode}
      setSelectedMode={setSelectedMode}
      sourceLanguage={sourceLanguage}
      setSourceLanguage={setSourceLanguage}
      targetLanguage={targetLanguage}
      setTargetLanguage={setTargetLanguage}
      delay={delay}
      setDelay={setDelay}
      transcription={transcription}
      translation={translation}
    />
  );
}
