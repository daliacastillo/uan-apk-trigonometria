// src/hooks/useTheme.js — Hook de acceso al tema (modo claro/oscuro)
import { useContext } from "react";
import { ThemeCtx } from "../ThemeCtx";

export const useTheme = () => useContext(ThemeCtx);
