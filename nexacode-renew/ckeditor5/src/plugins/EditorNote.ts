// src/plugins/EditorNote.ts
import { Plugin } from "@ckeditor/ckeditor5-core/src/plugin";
import { Command } from "@ckeditor/ckeditor5-core/src/command";
import ButtonView from "@ckeditor/ckeditor5-ui/src/button/buttonview";
// import noteIcon from "nexacode-renew/ckeditor5/src/plugins/note.svg"; // 아이콘은 원하는 걸 사용

export class EditorNote extends Plugin {
  init() {
    const editor = this.editor;
    console.log("✅ EditorNote 플러그인 초기화됨!");

    // 커맨드 등록
    editor.commands.add(
      "insertEditorNote",
      new InsertEditorNoteCommand(editor)
    );

    // 툴바 버튼 등록
    editor.ui.componentFactory.add("editorNote", (locale) => {
      const view = new ButtonView(locale);

      view.set({
        label: "주석 블록 삽입",
        // icon: noteIcon,
        icon: "💡",
        tooltip: true,
      });

      view.on("execute", () => {
        editor.execute("insertEditorNote");
      });

      return view;
    });
  }
}

class InsertEditorNoteCommand extends Command {
  override execute() {
    const editor = this.editor;
    editor.model.change((writer) => {
      const noteElement = writer.createElement("paragraph", {
        class: "editor-note",
      });

      editor.model.insertContent(noteElement);
      writer.setSelection(noteElement, "in");
    });
  }

  override refresh() {
    this.isEnabled = true;
  }
}
