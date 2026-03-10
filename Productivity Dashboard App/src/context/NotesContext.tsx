import React, { createContext, useContext, useState, useEffect } from "react";

interface NotesContextType {
  notes: string[];
  addNote: (note: string) => void;
  editNote: (index: number, newNote: string) => void;
  removeNote: (index: number) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<string[]>([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("notes");
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note: string) => setNotes([note, ...notes]);
  const editNote = (index: number, newNote: string) => {
    const updated = [...notes];
    updated[index] = newNote;
    setNotes(updated);
  };
  const removeNote = (index: number) => {
    const updated = [...notes];
    updated.splice(index, 1);
    setNotes(updated);
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, editNote, removeNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) throw new Error("useNotes must be used within NotesProvider");
  return context;
};
