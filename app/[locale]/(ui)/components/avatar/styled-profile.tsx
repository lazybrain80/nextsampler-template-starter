import React, { useState } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { CustomUserAvatar, UserAvatarProps } from './custom-avatar'
import * as Icons from '@/design/icons'

export const StyledUserProfile = ({ user }: UserAvatarProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  return (
    <div
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-800'}`}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="p-6 sm:p-10 bg-linear-to-r from-blue-600 via-blue-500 to-purple-600">
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full bg-white/20 backdrop-blur-xs hover:bg-white/30 transition-all duration-300"
              >
                {isDarkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
              </button>
            </div>

            <div className="flex flex-col items-center">
              <div className="rounded-full border-4 border-white shadow-2xl transition-transform duration-300 hover:scale-105">
                <CustomUserAvatar user={user} size="w-44 h-44" shape="circle" />
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-bold text-white mb-2">{user.name}</h2>
                <div className="flex items-center justify-center space-x-2 text-white/90">
                  <Icons.Mail className="w-4 h-4" />
                  <span>{user.email}</span>
                </div>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Icons.Circle
                    fill="lightgreen"
                    className={`text-green-400 w-4 h-4 animate-pulse`}
                  />
                  <span className="text-white font-medium">{'Available for collaboration'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
