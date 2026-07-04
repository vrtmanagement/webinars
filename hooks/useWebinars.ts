"use client";

import { useState, useEffect, useCallback } from "react";
import type { Webinar } from "@/types/webinar";
import { getWebinars } from "@/services/webinarService";

interface UseWebinarsReturn {
  webinars: Webinar[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useWebinars(): UseWebinarsReturn {
  const [webinars, setWebinars] = useState<Webinar[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchWebinars = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getWebinars();
      setWebinars(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWebinars();
  }, [fetchWebinars]);

  return { webinars, loading, error, refetch: fetchWebinars };
}
