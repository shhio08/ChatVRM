import { useCallback, useContext, useEffect, useState } from "react";
// import VrmViewer from "@/components/vrmViewer";
// import { ViewerContext } from "@/features/vrmViewer/viewerContext";
// import {
//   Message,
//   textsToScreenplay,
//   Screenplay,
// } from "@/features/messages/messages";
// import { speakCharacter } from "@/features/messages/speakCharacter";
// import { MessageInputContainer } from "@/components/messageInputContainer";
// import { SYSTEM_PROMPT } from "@/features/constants/systemPromptConstants";
// import { KoeiroParam, DEFAULT_PARAM } from "@/features/constants/koeiroParam";
// import { getChatResponseStream } from "@/features/chat/openAiChat";
// import { Introduction } from "@/components/introduction";
// import { Menu } from "@/components/menu";
// import { GitHubLink } from "@/components/githubLink";
// import { Meta } from "@/components/meta";
import SimpleVrmViewer from "@/components/SimpleVrmViewer";

export default function Home() {
  // const { viewer } = useContext(ViewerContext);

  // const [systemPrompt, setSystemPrompt] = useState(SYSTEM_PROMPT);
  // const [openAiKey, setOpenAiKey] = useState("");
  // const [koeiromapKey, setKoeiromapKey] = useState("");
  // const [koeiroParam, setKoeiroParam] = useState<KoeiroParam>(DEFAULT_PARAM);
  // const [chatProcessing, setChatProcessing] = useState(false);
  // const [chatLog, setChatLog] = useState<Message[]>([]);
  // const [assistantMessage, setAssistantMessage] = useState("");

  // useEffect(() => {
  //   if (window.localStorage.getItem("chatVRMParams")) {
  //     const params = JSON.parse(
  //       window.localStorage.getItem("chatVRMParams") as string
  //     );
  //     setSystemPrompt(params.systemPrompt ?? SYSTEM_PROMPT);
  //     setKoeiroParam(params.koeiroParam ?? DEFAULT_PARAM);
  //     setChatLog(params.chatLog ?? []);
  //   }
  // }, []);

  // useEffect(() => {
  //   process.nextTick(() =>
  //     window.localStorage.setItem(
  //       "chatVRMParams",
  //       JSON.stringify({ systemPrompt, koeiroParam, chatLog })
  //     )
  //   );
  // }, [systemPrompt, koeiroParam, chatLog]);

  // const handleChangeChatLog = useCallback(
  //   (targetIndex: number, text: string) => {
  //     const newChatLog = chatLog.map((v: Message, i) => {
  //       return i === targetIndex ? { role: v.role, content: text } : v;
  //     });

  //     setChatLog(newChatLog);
  //   },
  //   [chatLog]
  // );

  // const handleSpeakAi = useCallback(
  //   async (
  //     screenplay: Screenplay,
  //     onStart?: () => void,
  //     onEnd?: () => void
  //   ) => {
  //     speakCharacter(screenplay, viewer, koeiromapKey, onStart, onEnd);
  //   },
  //   [viewer, koeiromapKey]
  // );

  // const handleSendChat = useCallback(
  //   async (text: string) => {
  //     if (!openAiKey) {
  //       return;
  //     }
  //     // Chat processing logic
  //   },
  //   [systemPrompt, chatLog, handleSpeakAi, openAiKey, koeiroParam]
  // );

  return (
    <div className={"font-M_PLUS_2"}>
      {/* <Meta /> */}
      {/* <Introduction
        openAiKey={openAiKey}
        koeiroMapKey={koeiromapKey}
        onChangeAiKey={setOpenAiKey}
        onChangeKoeiromapKey={setKoeiromapKey}
      /> */}
      <SimpleVrmViewer />
      {/* <MessageInputContainer
        isChatProcessing={chatProcessing}
        onChatProcessStart={handleSendChat}
      />
      <Menu
        openAiKey={openAiKey}
        systemPrompt={systemPrompt}
        chatLog={chatLog}
        koeiroParam={koeiroParam}
        assistantMessage={assistantMessage}
        koeiromapKey={koeiromapKey}
        onChangeAiKey={setOpenAiKey}
        onChangeSystemPrompt={setSystemPrompt}
        onChangeChatLog={handleChangeChatLog}
        onChangeKoeiromapParam={setKoeiroParam}
        handleClickResetChatLog={() => setChatLog([])}
        handleClickResetSystemPrompt={() => setSystemPrompt(SYSTEM_PROMPT)}
        onChangeKoeiromapKey={setKoeiromapKey}
      />
      <GitHubLink /> */}
    </div>
  );
}
