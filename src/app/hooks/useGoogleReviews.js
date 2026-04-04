'use client';

import { useState, useEffect } from 'react';

const SPREADSHEET_ID = '12bAWItrIBDnlnXZePRUU2aktnyvaQ8f6aJr6mgCoMQA';
const API_KEY = 'AIzaSyCv0sb_sozgnDgaU4AmwaksOG5kUUp3UjE';
const SHEET_NAME = 'Form responses 1';

export function useGoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${encodeURIComponent(SHEET_NAME)}?key=${API_KEY}`);
        const data = await response.json();
        
        if (data.values && data.values.length > 1) {
          const rows = data.values.slice(1);
          const formattedReviews = rows.map((row, index) => ({
            id: `google-${index}`,
            name: row[1] || 'Guest',
            rating: parseInt(row[2]) || 5,
            text: row[3] || '',
            location: 'Hyderabad',
            title: 'Guest Review', // For teaser
            isNew: true
          })).filter(r => r.text);
          
          setReviews(formattedReviews);
        }
      } catch (error) {
        console.error('Error fetching Google Sheets reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, []);

  return { reviews, loading };
}
