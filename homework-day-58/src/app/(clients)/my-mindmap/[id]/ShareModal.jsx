import React, { useState, useEffect } from 'react';
import { Globe, Lock, Copy } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShareModal = ({ isOpen, onClose, mindmapId, isPublic, onVisibilityChange }) => {
  const [visibility, setVisibility] = useState(isPublic);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    shareImage: 'https://mindmap.f8.edu.vn/_next/static/media/so-do-tu-duy.95dad645.jpg'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const shareUrl = `${window.location.origin}/my-mindmap/${mindmapId}`;

  useEffect(() => {
    if (isOpen) {
      setVisibility(isPublic);
      setIsSubmitting(false);
    }
  }, [isOpen, isPublic]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    toast.success('Đã sao chép liên kết!');
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const response = await fetch(`${process.env.SERVER_API}/mindmaps/${mindmapId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          isPublic: visibility,
          shareTitle: formData.title,
          shareDescription: formData.description,
          shareImage: formData.shareImage
        }),
      });

      if (response.ok) {
        toast.success('Đã lưu thay đổi thành công!');
        onVisibilityChange?.(visibility);
        onClose();
      } else {
        throw new Error('Failed to update mindmap');
      }
    } catch (error) {
      toast.error('Có lỗi xảy ra khi lưu thay đổi');
      console.error('Error updating mindmap:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[9999]">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-4">Chia sẻ Mindmap</h2>
        
        <div className="space-y-4">
          <div className="flex gap-4">
            <button
              onClick={() => setVisibility(false)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded transition-colors
                ${!visibility ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <Lock className="w-5 h-5" />
              Riêng tư
            </button>
            <button
              onClick={() => setVisibility(true)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded transition-colors
                ${visibility ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <Globe className="w-5 h-5" />
              Công khai
            </button>
          </div>

          {visibility ? (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Liên kết chia sẻ</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={shareUrl}
                    readOnly
                    className="flex-1 bg-gray-100 p-2 rounded"
                  />
                  <button
                    onClick={handleCopyLink}
                    className="px-3 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
                    title="Sao chép liên kết"
                  >
                    <Copy className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tiêu đề</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Mindmap không có tên"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  rows="3"
                  placeholder="Thêm mô tả cho bản chia sẻ"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ảnh chia sẻ</label>
                <input
                  type="text"
                  name="shareImage"
                  value={formData.shareImage}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          ) : (
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">Nếu chọn riêng tư, chỉ có bạn mới được quyền xem Mindmap này.</p>
            </div>
          )}

          <div className="flex justify-between pt-4">
            <button 
              onClick={onClose}
              className="px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors"
            >
              Đóng
            </button>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? 'Đang lưu...' : 'Lưu lại'}
            </button>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
};

export default ShareModal;