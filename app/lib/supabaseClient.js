import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://afyjzxnfqqhtqzrvfwdy.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFmeWp6eG5mcXFodHF6cnZmd2R5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQyNTU4OTMsImV4cCI6MTk5OTgzMTg5M30.g4DlQlTh9oeGf7c2MatD_S17xPRbzdnn_57sp7UhqYA"
);
