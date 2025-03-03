import React, { useEffect, useRef } from "react";
import Quill from "quill";
import * as Y from "yjs";
import { QuillBinding } from "y-quill";
import { WebsocketProvider } from "y-websocket";

const Editor = ({ roomId }) => {
  const editorRef = useRef(null);
  
  useEffect(() => {
    const ydoc = new Y.Doc(); // Yjs document
    const provider = new WebsocketProvider("ws://localhost:3001", roomId, ydoc);
    const yText = ydoc.getText("quill"); // Shared text type

    const quill = new Quill(editorRef.current, {
      theme: "snow",
      modules: {
        toolbar: [["bold", "italic", "underline"], ["list", "bullet"]],
      },
    });

    new QuillBinding(yText, quill);

    return () => {
      provider.destroy();
      ydoc.destroy();
    };
  }, [roomId]);

  return <div ref={editorRef} />;
};

export default Editor;
