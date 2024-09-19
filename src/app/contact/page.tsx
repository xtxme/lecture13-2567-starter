import { IconBrandFacebookFilled, IconBrandX } from '@tabler/icons-react'
import React from 'react'

export default function ContactPage() {
  return (
    <div className="text-center my-4">
        <p className="fw-bold fs-4">Contact</p>
        <p>
          <strong><IconBrandFacebookFilled/>:</strong>
          TOP10IMDB
        </p>
        <p>
          <strong><IconBrandX/>:</strong>
          @TOP10IMDB
        </p>
    </div>
  )
}


