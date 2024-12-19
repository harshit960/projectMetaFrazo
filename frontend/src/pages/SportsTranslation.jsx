import React from 'react';

const SportsTranslation = ({
  roomCode,
  sourceLanguage,
  targetLanguage,
  delay,
  setDelay,
  isRecording,
  setIsRecording,
  transcription,
  translation,
}) => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex-1">
        <div className="container mx-auto p-6 space-y-8">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Sports Translation</h1>
            </div>
            <button
              type="button"
              className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm w-[200px] focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <span>{isRecording ? "Stop Recording" : "Start Recording"}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 opacity-50"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>

          {/* Card */}
          <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
            <div className="space-y-6">
              {/* Tabs */}
              <div
                role="tablist"
                aria-orientation="horizontal"
                className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1"
              >
                <button
                  role="tab"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Translation
                </button>
                <button
                  role="tab"
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium focus-visible:ring-2 focus-visible:ring-ring"
                >
                  Vocabulary
                </button>
              </div>

              {/* Translation Panel */}
              <div className="space-y-6">
                {/* Language Selectors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Source Language</label>
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring"
                    >
                      <span>{sourceLanguage}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Target Language</label>
                    <button
                      type="button"
                      className="flex h-10 w-full items-center justify-between rounded-md border bg-background px-3 py-2 text-sm focus:ring-2 focus:ring-ring"
                    >
                      <span>{targetLanguage}</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 opacity-50"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                  <button
                    onClick={() => setIsRecording(!isRecording)}
                    className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-20 w-20 rounded-full focus:ring-2 focus:ring-ring"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-8 w-8"
                    >
                      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                      <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                      <line x1="12" x2="12" y1="19" y2="22"></line>
                    </svg>
                  </button>
                </div>

                {/* Room Code */}
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">Room Code: {roomCode}</p>
                </div>

                {/* Translation Delay */}
                <div>
                  <label className="text-sm font-medium">Translation Delay (seconds)</label>
                  <input
                    type="number"
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base focus:ring-2 focus:ring-ring"
                    min="0"
                    max="60"
                    value={delay}
                    onChange={(e) => setDelay(Number(e.target.value))}
                  />
                </div>

                {/* Transcription Output */}
                <div>
                  <label className="text-sm font-medium">Transcription</label>
                  <textarea
                    className="flex w-full rounded-md border bg-background px-3 py-2 text-base focus:ring-2 focus:ring-ring"
                    rows="4"
                    value={transcription}
                    readOnly
                  ></textarea>
                </div>

                {/* Translation Output */}
                <div>
                  <label className="text-sm font-medium">Translation</label>
                  <textarea
                    className="flex w-full rounded-md border bg-background px-3 py-2 text-base focus:ring-2 focus:ring-ring"
                    rows="4"
                    value={translation}
                    readOnly
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SportsTranslation;
