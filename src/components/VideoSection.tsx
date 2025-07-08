
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Play, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VideoSection = () => {
  const [videos, setVideos] = useState<{ url: string; name: string; file: File }[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const { toast } = useToast();

  const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      Array.from(files).forEach(file => {
        if (file.type.startsWith('video/')) {
          // Check file size (limit to 50MB for better performance)
          if (file.size > 50 * 1024 * 1024) {
            toast({
              title: "File too large",
              description: `${file.name} is too large. Please use videos under 50MB.`,
              variant: "destructive"
            });
            return;
          }

          const videoUrl = URL.createObjectURL(file);
          setVideos(prev => [...prev, { 
            url: videoUrl, 
            name: file.name,
            file: file 
          }]);
          
          toast({
            title: "Video uploaded",
            description: `${file.name} has been added to your gallery.`
          });
        }
      });
    }
    // Reset the input
    event.target.value = '';
  };

  const removeVideo = (videoUrl: string) => {
    setVideos(prev => {
      const updatedVideos = prev.filter(video => video.url !== videoUrl);
      // Clean up the blob URL
      URL.revokeObjectURL(videoUrl);
      return updatedVideos;
    });
    
    toast({
      title: "Video removed",
      description: "Video has been removed from your gallery."
    });
  };

  // Clean up blob URLs when component unmounts
  React.useEffect(() => {
    return () => {
      videos.forEach(video => {
        URL.revokeObjectURL(video.url);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-ocean-blue to-turquoise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Experience Our <span className="text-coral">Adventures</span>
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Watch the magic of Mauritius come alive through our cruise adventures
          </p>
        </div>

        {/* Video Upload */}
        <div className="mb-12 text-center">
          <label htmlFor="video-upload" className="cursor-pointer">
            <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border-2 border-dashed border-white/40 rounded-lg px-8 py-6 hover:bg-white/30 transition-all duration-300">
              <Upload className="h-8 w-8 text-black" />
              <div className="text-black">
                <div className="text-lg font-semibold">Upload Videos</div>
                <div className="text-sm text-black/80">Click to select video files (Max 50MB each)</div>
              </div>
            </div>
          </label>
          <input
            id="video-upload"
            type="file"
            accept="video/*"
            multiple
            onChange={handleVideoUpload}
            className="hidden"
          />
        </div>

        {/* Note about video persistence */}
        {videos.length > 0 && (
          <div className="mb-8 text-center">
            <div className="inline-block bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-2">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> Uploaded videos are stored temporarily. For permanent hosting, consider uploading videos to a video platform and embedding them.
              </p>
            </div>
          </div>
        )}

        {/* Video Grid - 2 columns */}
        {videos.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videos.map((video, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                <CardContent className="p-0 relative group">
                  <div className="relative aspect-video">
                    <video
                      src={video.url}
                      className="w-full h-full object-cover"
                      poster=""
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        onClick={() => setSelectedVideo(video.url)}
                        className="bg-coral hover:bg-coral/90 text-white rounded-full p-4"
                      >
                        <Play className="h-6 w-6" />
                      </Button>
                    </div>
                    <Button
                      onClick={() => removeVideo(video.url)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      size="sm"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="p-3 bg-white/5">
                    <p className="text-sm text-black truncate" title={video.name}>
                      {video.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Video Modal */}
        {selectedVideo && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full">
              <Button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 bg-white/20 hover:bg-white/30 text-white rounded-full p-2"
              >
                <X className="h-6 w-6" />
              </Button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        )}

        {videos.length === 0 && (
          <div className="text-center text-black">
            <p className="text-lg">No videos uploaded yet. Upload some videos to showcase your cruise adventures!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
